import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  Button,
  Container,
  PageTitle,
  SidebarLayout,
  Table,
} from '../../components';
import { IBilling } from '../../interfaces';
import { BillingService } from '../../services';
import { Billing } from '../../shared';

type IBillingTable = IBilling & { customerName: string };

export function BillingsPage() {
  const navigate = useNavigate();
  const [billings, setBillings] = useState<IBillingTable[]>([]);

  function handleTableClick({ id }: any) {
    navigate(`/cobrancas/alterar/${id}`);
  }

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await BillingService.findAll();
      if (status === 200) {
        setBillings(data.map(Billing.parsePayload));
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle
        title="Cobranças"
        buttons={[
          <Link to="/cobrancas/adicionar">
            <Button size="small">Adicionar</Button>
          </Link>,
        ]}
      />
      <Container className="p-10">
        <Table
          onClick={handleTableClick}
          headers={[
            { key: 'customerName', label: 'Cliente', width: 200 },
            { key: 'description', label: 'Descrição' },
            { key: 'status', label: 'Status', width: 100 },
            { key: 'value', label: 'Valor (R$)', width: 150 },
            { key: 'dueDate', label: 'Vencimento', width: 200 },
          ]}
          data={billings}
        />
      </Container>
    </SidebarLayout>
  );
}
