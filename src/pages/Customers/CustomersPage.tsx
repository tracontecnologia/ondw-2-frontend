import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  Container,
  PageTitle,
  SidebarLayout,
  Table,
} from '../../components';
import { ICustomer } from '../../interfaces';
import { CustomerService } from '../../services';

export function CustomersPage() {
  const navigate = useNavigate();
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  function handleTableClick({ id }: any) {
    navigate(`/clientes/alterar/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await CustomerService.findAll();
      if (status === 200) {
        setCustomers(data);
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle
        title="Clientes"
        buttons={[
          <Link to="/clientes/adicionar">
            <Button size="small">Adicionar</Button>
          </Link>,
        ]}
      />
      <Container className="p-10">
        <Table
          onClick={handleTableClick}
          headers={[
            { key: 'name', label: 'Nome' },
            { key: 'email', label: 'E-mail', width: 200 },
            { key: 'cellphone', label: 'Celular', width: 200 },
          ]}
          data={customers}
        />
      </Container>
    </SidebarLayout>
  );
}
