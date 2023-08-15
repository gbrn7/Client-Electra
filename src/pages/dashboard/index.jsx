import { useEffect } from 'react';
import './style.css'
import PureCounter from "@srexi/purecounterjs";
import ECard from '../../components/ECard';
import cardOneBg from '../../assets/img/layer-1.svg';
import cardTwoBg from '../../assets/img/layer-2.svg';
import cardThreeBg from '../../assets/img/layer-3.svg';
import { useDispatch, useSelector } from 'react-redux';
import { 
    fetchDashboardBestSelling,
    fetchDashboardNewOrder,
    fetchDashboardRevenue,
    fetchDashboardSchedule,
    fetchDashboardTotalOrder,
    fetchDashboardWorstSelling } from '../../redux/dashboard/actions';
import ETable from '../../components/ETable';

function Dashboard() {
  const dispatch = useDispatch();

  const datas = useSelector((state) => state.dashboard);

  useEffect(() => 
  {
    Promise.all([
        dispatch(fetchDashboardRevenue()),
        dispatch(fetchDashboardTotalOrder()),
        dispatch(fetchDashboardNewOrder()),
    ]).then(() => new PureCounter);
    
    dispatch(fetchDashboardBestSelling());
    dispatch(fetchDashboardWorstSelling());
    dispatch(fetchDashboardSchedule());
}, 
  [ ]);


  return (
    <section className="content h-100 w-100  main">
    {console.log(datas.schedule)};
    <div className="container-fluid  m-0">
        <div className="row row-1 ">
          <div className="title">Dashboard</div>
        </div>
        <div className="row row-2 d-flex gap-2  mt-2">
            <ECard value={datas.revenue} backgroundImage={cardOneBg} icon={'bx bx-money-withdraw'} currency={'Rp.'} title={'Total Revenue'}/>
            <ECard value={datas.totalOrder} backgroundImage={cardTwoBg} icon={'bx bxs-package'} title={'Total Orders'}/>
            <ECard value={datas.newOrder} backgroundImage={cardThreeBg} icon={'bx bx-shopping-bag'} title={'New Orders'}/>
        </div>
        <div className="row  row-3 mt-2 gap-3">
        <div className="col-11 col-lg-5 bg-white table-wrapper mt-2  p-2 border-dark rounded-3">
        <ETable 
        title={"Best Selling Product"}
        data={datas.bestSelling}
        status={datas.statusBestSelling}
        textHead={['Name', 'Price', 'Stock', 'Product Sold', 'Revenue']}
        tbody={['name', 'price', 'productSold', 'stock', 'total']}
        withoutPagination
        />
        </div>
            <div className="col-11 col-lg-4 bg-white mt-2 table-wrapper  p-2 border-dark rounded-3">
            <ETable 
            title={"Lowest Rank Selling Product"}
            data={datas.worstSelling}
            status={datas.statusWorstSelling}
            textHead={['Name', 'Price', 'Stock', 'Product Sold']}
            tbody={['name', 'price', 'productSold', 'stock']}
            withoutPagination
            />
            </div>
        </div>
        <div className="row row-4 mt-2 pb-4 gap-3">
          <div className="col-10 bg-white table-wrapper mt-2  p-2 border-dark rounded-3">
          <ETable 
            title={"Need to be sent"}
            data={datas.schedule.transactions}
            status={datas.statusWorstSelling}
            textHead={['ID', 'User Id',  'transactions code', 'transactions status', 'Date']}
            tbody={['_id', 'userId',  'date', 'transaction_code', 'transaction_status']}
            withoutPagination
            />
          </div>
        </div>
    </div>
  </section>
   );
}

export default Dashboard;