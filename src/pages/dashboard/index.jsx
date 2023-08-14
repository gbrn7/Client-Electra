import { useEffect } from 'react';
import './style.css'
import PureCounter from "@srexi/purecounterjs";
import ECard from '../../components/ECard';
import cardOneBg from '../../assets/img/layer-1.svg';
import cardTwoBg from '../../assets/img/layer-2.svg';
import cardThreeBg from '../../assets/img/layer-3.svg';

function Dashboard() {

  useEffect(() => 
  {
    new PureCounter()
}, 
  []);


  return ( 
    <section className="content h-100 w-100  main">
    <div className="container-fluid  m-0">
        <div className="row row-1 ">
          <div className="col-12 title">Dashboard</div>
        </div>
        <div className="row row-2 d-flex gap-2  mt-2">
            <ECard value={230000000} backgroundImage={cardOneBg} icon={'bx bx-money-withdraw'} currency={'Rp.'} title={'Total Revenue'}/>
            <ECard value={45678} backgroundImage={cardTwoBg} icon={'bx bxs-package'} title={'Total Order'}/>
            <ECard value={58} backgroundImage={cardThreeBg} icon={'bx bx-shopping-bag'} title={'New OrderOrder'}/>
        </div>
        <div className="row  row-3 mt-2 gap-3">
        <div className="col-11 col-lg-5 bg-white table-wrapper mt-2  p-2 border-dark rounded-3">
        <p className="m-0 pb-1  border-bottom border-dark">Top Produk</p>
        <table id="" className="table table-striped" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Nama Produk</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01</td>
                <td>Kopi arabika Gayo Monero Robusta Coffee 250g - Biji Kopi</td>
                <td>Draft</td>
            </tr>
            <tr>
                <td>02</td>
                <td>Kopi Robusta Gayo Monero Robusta Coffee 250g - Biji Kopi</td>
                <td>Draft</td>
            </tr>
            <tr>
                <td>03</td>
                <td>Kopi Robusta Gayo Monero Robusta Coffee 250g - Biji Kopi</td>
                <td>Draft</td>
            </tr>
            <tr>
                <td>04</td>
                <td>Kopi Robusta Gayo Monero Robusta Coffee 250g - Biji Kopi</td>
                <td>Draft</td>
            </tr>
            <tr>
                <td>05</td>
                <td>Kopi Robusta Gayo Monero Robusta Coffee 250g - Biji Kopi</td>
                <td>Draft</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>ID</th>
                <th>Nama Produk</th>
                <th>Status</th>
            </tr>
        </tfoot>
        </table>
            </div>
        <div className="col-11 col-lg-4 bg-white mt-2 table-wrapper  p-2 border-dark rounded-3">
              <p className="m-0 pb-1 border-bottom border-dark">Top Transaksi</p>
              <table id="" className="table table-striped" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID User</th>
                        <th>Total</th>
                        <th>Status Pembayaran</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>03</td>
                        <td>Rp.400000</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>03</td>
                        <td>Rp.300000</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>04</td>
                        <td>Rp.500000</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>03</td>
                        <td>Rp.400000</td>
                        <td>Success</td>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>03</td>
                        <td>Rp.400000</td>
                        <td>Success</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>ID User</th>
                        <th>Total</th>
                        <th>Status Pembayaran</th>
                    </tr>
                </tfoot>
            </table>
            </div>
        </div>
        <div className="row  row-4 mt-2 pb-4 gap-3">
          <div className="col-10 bg-white table-wrapper mt-2  p-2 border-dark rounded-3">
            <p className="m-0 pb-1 border-bottom border-dark">Top Schedule</p>
            <table id="" className="table table-striped mt-4 mb-5" >
              <thead>
                  <tr>
                      <th >ID Transaksi</th>
                      <th>Nama Customer</th>
                      <th>Alamat</th>
                      <th>Jadwal Pengiriman</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>03</td >
                    <td>Fajar</td >
                    <td>Jl Merpati No.4</td >
                    <td>15 April 2023</td >
                  </tr>
                  <tr>
                    <td>03</td >
                    <td>Fajar</td >
                    <td>Jl Merpati No.4</td >
                    <td>15 April 2023</td >
                  </tr>
                  <tr>
                    <td>03</td >
                    <td>Fajar</td >
                    <td>Jl Merpati No.4</td >
                    <td>15 April 2023</td >
                  </tr>
                  <tr>
                    <td>03</td >
                    <td>Fajar</td >
                    <td>Jl Merpati No.4</td >
                    <td>15 April 2023</td >
                  </tr>
                  <tr>
                    <td>03</td >
                    <td>Fajar</td >
                    <td>Jl Merpati No.4</td >
                    <td>15 April 2023</td >
                  </tr>

              </tbody>
              <tfoot>
                  <tr>
                    <th>ID Transaksi</th>
                    <th>Nama Customer</th>
                    <th>Alamat</th>
                    <th>Jadwal Pengiriman</th>
                  </tr>
              </tfoot>
          </table>
          </div>
        </div>
    </div>
  </section>
   );
}

export default Dashboard;