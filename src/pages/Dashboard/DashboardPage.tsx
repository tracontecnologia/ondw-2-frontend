import { useEffect, useState } from 'react';
import { MdAttachMoney, MdMoneyOff, MdPersonOutline } from 'react-icons/md';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { Card, Container, PageTitle, SidebarLayout } from '../../components';
import { DateHelper, NumberHelper } from '../../helpers';
import { IBillingDashboard } from '../../interfaces';
import { BillingService } from '../../services';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

export function DashboardPage() {
  const [dashboard, setDashboard] = useState<IBillingDashboard>();
  const [barData, setBarData] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const { status, data } = await BillingService.dashboard();
      if (status === 200) {
        setDashboard(data);

        const dates = data.history.map((history) => history.dueDate);

        const paids = dates.map(
          (date) =>
            data.history
              .filter(({ status }) => status === 'PAID')
              .find(({ dueDate }) => dueDate === date)?.value || 0
        );

        const pendings = dates.map(
          (date) =>
            data.history
              .filter(({ status }) => status === 'PENDING')
              .find(({ dueDate }) => dueDate === date)?.value || 0
        );

        setBarData({
          labels: dates.map((date) => DateHelper.toFormat(date, 'dd/MM')),
          datasets: [
            {
              label: 'Receita',
              data: paids,
              backgroundColor: 'hsla(184, 99%, 38%, 0.5)',
            },
            {
              label: 'Pendentes',
              data: pendings,
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        });
      }
    }

    fetchData();
  }, []);

  return (
    <SidebarLayout>
      <PageTitle title="Dashboard" />
      {dashboard && (
        <div className="max-w-full lg:max-w-6xl">
          <div className="flex items-center justify-between gap-4">
            <Card
              Icon={<MdAttachMoney />}
              label="Receita"
              value={NumberHelper.toBRL(dashboard.paid)}
            />
            <Card
              Icon={<MdMoneyOff />}
              label="Atrasos"
              value={NumberHelper.toBRL(dashboard.late)}
            />
            <Card
              Icon={<MdMoneyOff />}
              label="Pendentes"
              value={NumberHelper.toBRL(dashboard.pending)}
            />
            <Card
              Icon={<MdPersonOutline />}
              label="Clientes"
              value={dashboard.customers}
            />
          </div>
          {barData && (
            <Container className="mt-4">
              <Bar options={barOptions} data={barData} />
            </Container>
          )}
        </div>
      )}
    </SidebarLayout>
  );
}
