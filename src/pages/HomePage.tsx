import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import PieChartSVG from '../assets/pieChart.svg'
import WorldMapSvg from '../assets/worldMap.svg'
import {fakeData,stackBarChart,fakeRevLocation,fakeSales} from '../components/FakeData'

function HomePage() {
  const theme = useSelector((state:any) => state.toggleSite.theme)

  return (
    <div className='centerCol HomePage'>
      <div className="Space h-[30px]"></div>
      <div className="centerCol eCommerce">
        <h1>eCommerce</h1>
        <div className="Space h-[20px]"></div>
        <div className="centerRow ecommerCards">
          <div className="centerRow ecommerceInfo">
            <div className="centerRow ecommerceInfoCards"
              style={{justifyContent:'flex-start', alignItems:'flex-start'}}
            >
              <div className={`centerCol ecommerceCardsSub bg-[#e3e5ff]`}>
                <h1 style={{color:'black'}}>Customers</h1>
                <div className="centerRow CardInfo">
                    <div className="centerRow cardTrendTop bg-[#e3e5ff]">
                      <h2>3,781</h2>
                      <div className="centerRow CardTrend">
                        <FaArrowTrendUp size={10}/>
                        <h3>+11.01%</h3>
                      </div>
                    </div>
                    <div className="centerRow cardTrendReverse">
                      <div className="centerRow CardTrend">
                        <h3>+11.01%</h3>
                        <FaArrowTrendUp size={10}/>
                      </div>
                      <h2>3,781</h2>
                    </div>
                </div>
              </div>
            </div>
            <div className="centerRow ecommerceInfoCards"
              style={{justifyContent:'flex-end', alignItems:'flex-start'}}
            
            >
              <div className={`centerCol ecommerceCardsSub ${!theme?'bg-[#f7f9fb]':'bg-[#272727]'}`}>
                <h1>Orders</h1>
                <div className="centerRow CardInfo">
                    <div className={`centerRow cardTrendTop ${!theme?'bg-[#f7f9fb]':'bg-[#272727]'}`}>
                      <h2 style={{color:!theme?'black':'white'}}>1,219</h2>
                      <div className="centerRow CardTrend">
                        <FaArrowTrendDown size={10} color={!theme?'black':'white'}/>
                        <h3 style={{color:!theme?'black':'white'}}>-0.03%</h3>
                      </div>
                    </div>
                    <div className="centerRow cardTrendReverse">
                      <div className="centerRow CardTrend">
                        <h3 style={{color:!theme?'black':'white'}}>-0.03%</h3>
                        <FaArrowTrendDown size={10} color={!theme?'black':'white'}/>
                      </div>
                      <h2 style={{color:!theme?'black':'white'}}>1,219</h2>
                    </div>
                </div>
              </div>
            </div>
            <div className="centerRow ecommerceInfoCards"
              style={{justifyContent:'flex-start', alignItems:'flex-end'}}
            
            >
              <div className={`centerCol ecommerceCardsSub ${!theme?'bg-[#f7f9fb]':'bg-[#272727]'}`}>
                <h1>Revenue</h1>
                <div className="centerRow CardInfo">
                    <div className={`centerRow cardTrendTop ${!theme?'bg-[#f7f9fb]':'bg-[#272727]'}`}>
                      <h2 style={{color:!theme?'black':'white'}}>$695</h2>
                      <div className="centerRow CardTrend">
                        <FaArrowTrendUp size={10} color={!theme?'black':'white'}/>
                        <h3 style={{color:!theme?'black':'white'}}>+15.03%</h3>
                      </div>
                    </div>
                    <div className="centerRow cardTrendReverse">
                      <div className="centerRow CardTrend">
                        <h3 style={{color:!theme?'black':'white'}}>+15.03%</h3>
                        <FaArrowTrendUp size={10} color={!theme?'black':'white'}/>
                      </div>
                      <h2 style={{color:!theme?'black':'white'}}>$695</h2>
                    </div>
                </div>
              </div>
            </div>
            <div className="centerRow ecommerceInfoCards"
              style={{justifyContent:'flex-end', alignItems:'flex-end'}}
            
            >
              <div className="centerCol ecommerceCardsSub bg-[#e5ecf6]">
                <h1 style={{color:'black'}}>Growth</h1>
                <div className="centerRow CardInfo">
                    <div className="centerRow cardTrendTop bg-[#e5ecf6]">
                      <h2>30.1%</h2>
                      <div className="centerRow CardTrend">
                        <FaArrowTrendUp size={10}/>
                        <h3>+6.08%</h3>
                      </div>
                    </div>
                    <div className="centerRow cardTrendReverse">
                      <div className="centerRow CardTrend">
                        <h3>+6.08%</h3>
                        <FaArrowTrendUp size={10}/>
                      </div>
                      <h2>30.1%</h2>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="centerCol ecommerceBarChart">
            <h1>Projections vs Actuals</h1>
            <div className="centerRow StackedBarchart">
              <div className="centerCol YAxis">
                <h1>30M</h1>
                <h1>20M</h1>
                <h1>10M</h1>
                <h1>0s</h1>
              </div>
              <div className="XAxis">
                <div className='centerCol ChartBackground'>
                  <div className="ChartBars"></div>
                  <div className="ChartBars"></div>
                  <div className="ChartBars"></div>
                  <div className="ChartBars"></div>
                </div>
                <div className="centerRow Charts">
                  {stackBarChart.map((e:any) => {
                    return(
                      <>
                      <div className='centerCol StackedCharts'>
                        <div className={`centerCol StackedBars`}
                          style={{height:e.parent}}
                        >
                            <div className="ChildBar"
                            style={{height:e.child}}
                            ></div>
                        </div>
                        <div className="centerRow ChartName">
                          <h1>{e.month}</h1>
                        </div>
                      </div>
                      </>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="Space h-[30px]"></div>
      <div className="centerRow Revenue">
        <div className="centerCol RevenueLineChart">
          <div className="centerRow RevenueCardInfo">
            <h1>Revenue</h1>
            <div className="centerRow RevenueHeading">
              <div className="centerRow WeeklyInfo">
                <div className="Dot"></div>
                <h1>Current Week <span>$58,211</span></h1>
              </div>
              <div className="centerRow WeeklyInfo">
                <div className="Dot"></div>
                <h1>Previous Week <span>$68,768</span></h1>
              </div>
            </div>
          </div>
          <div className="centerRow LineChart" style={{minHeight:'200px'}}>
            <div className="centerCol YAxis">
                <h1>30M</h1>
                <h1>20M</h1>
                <h1>10M</h1>
                <h1>0s</h1>
              </div>
              <div className="XAxis">
                <div className='centerCol ChartBackground'>
                  <div className="ChartBars"></div>
                  <div className="ChartBars"></div>
                  <div className="ChartBars"></div>
                  <div className="ChartBars"></div>
                </div>
                <div className="centerRow Charts">
                  <div className="ChartSub">
                    {/* <img src={RevenueSVG} className='h-full w-full scale-[2]' alt="" /> */}
                  </div>
                  {stackBarChart.map((e:any) => {
                    return(
                      <>
                      <div className='centerCol StackedCharts'>
                        <div className={`centerCol StackedBars`}
                          style={{height:e.parent}}
                        >
                            <div className="ChildBar"
                            style={{height:e.child}}
                            ></div>
                        </div>
                        <div className="centerRow ChartName">
                          <h1>{e.month}</h1>
                        </div>
                      </div>
                      </>
                    )
                  })}
                </div>
              </div>
          </div>
        </div>
        <div className="centerCol RevenueMap">
          <div className="centerCol RevenueHead">
            <h1>Revenue by location</h1>
            <div className="centerCol Map">
              <img src={WorldMapSvg} className='w-[90%] h-[90%]' alt="err" />
            </div>
          </div>
          <div className="centerCol RevenueBody">
            {fakeRevLocation.map((e:any) => {
              return(
                <>
                  <div className="centerCol IndividualRev">
                    <div className="centerRow RevenueInfo">
                      <h1>{e.location}</h1>
                      <h1>{e.revenue}K</h1>
                    </div>
                    <div className="centerRow RevenueLevel">
                      <div className={`h-full bg-[#a8c5ba]`}
                        style={{width:e.revenue}}
                      ></div>
                    </div>
                  </div>
                </>
              )
            })}
            
          </div>
        </div>
      </div>
      <div className="Space h-[30px]"></div>
      <div className="centerRow Products">
        <div className="ProductSales">
          <h1>Top Selling Products</h1>
          <div className="centerCol ProductSalesTable">
            <div className="centerCol ProductTableSub">
              <div className="centerRow ProductTableHead">
                <div className="centerRow Name">
                  <h1>Name</h1>
                </div>
                <div className="centerRow Price">
                  <h1>Price</h1>
                </div>
                <div className="centerRow Quantity">
                  <h1>Quantity</h1>
                </div>
                <div className="centerRow Amount">
                  <h1>Amount</h1>
                </div>
              </div>
              <div className="centerCol ProductTableList">
                {fakeData.map((e:any) => {
                  return(
                    <>
                    <div className="centerRow ProductTableBody">
                      <div className="centerRow Name">
                        <h1>{e.name}</h1>
                      </div>
                      <div className="centerRow Price">
                        <h1>{e.price}</h1>
                      </div>
                      <div className="centerRow Quantity">
                        <h1>{e.quantity}</h1>
                      </div>
                      <div className="centerRow Amount">
                        <h1>{e.amount}</h1>
                      </div>
                    </div>
                    </>
                  )
                })}
                
              </div>
            </div>
          </div>
        </div>
        <div className="centerCol TotalSales">
          <div className="centerCol TotalSalesHead">
            <h1>Total Sales</h1>
            <div className="centerCol RingChart">
              <img src={PieChartSVG} className='w-full'/>
            </div>
          </div>
          <div className="centerCol TotalSalesBody">
            {fakeSales.map((e:any, idx:number) => {
              return(
                <>
                  <div className="centerRow SalesIndvRow">
                    <div className="centerRow SalesInfo">
                      <div className={`Dot`}
                        style={{background:dynamic_Colors(idx)}}
                      ></div>
                      <h1>{e.name}</h1>
                    </div>
                      <h2>{e.amount}</h2>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>

      <div className="Space h-[100px]"></div>

    </div>
  )
}

const dynamic_Colors = (e:number) => {
  
  if(e == 0){
    return "#affabd"
  }

  if(e == 1){
    return "#38eef5"
  }

  if(e == 2){
    return "#a080ff"
  }

  if(e == 3){
    return "#000"
  }

  return '#000'
}

export default HomePage