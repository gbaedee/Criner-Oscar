<template>
  <!-- Section: Icon Boxes -->
  <div>
  <section class="section section-icons indigo  center">
    <div class="container">
      <div class="row">
        <div class="col s12 m8">
          <div class="card-panel z-depth-5">
            <h4 class="left-align">Computational Finance Research</h4>
            <img src="../../assets/images/Historical Bubble S and P.gif" class="imglarge responsive">
            <h6 class="left-align">Optimal Control Strategies for Portfolios of Managed Futures</h6>
            <p class="left-align">
               by Oscar H. Criner in Computational Finance and It Applications
            </p>
            <p class="left-align">
               <strong> Abstract </strong>
            </p>
            <p class="left-align">
              The problem: Given only historical trading price-time data for the 
              formally traded financial instrument of interest (portfolio), what 
              trading decisions should be made at the current point in time so 
              that the chosen performance measure of the portfolio is maximized? 
              Advancing computing technology has encouraged development of an 
              extremely large number of computational tools to solve this problem. 
              Most of these tools employ pattern recognition, moving averages, or 
              neural nets. Few, if any, attempts have been made to cast the 
              problem into a single consistent theoretical framework. We use the 
              theory of optimal control of differential equations as the framework 
              and seek an inverse solution for the controller. Given a price-time 
              trajectory, we seek the policies that optimize performance over that 
              trajectory. Assuming that the behavior continues into the future for 
              some time, the optimal control strategies are the result. This paper 
              reports on a program of research that succeeded in that effort.
            </p>
            <p class="left-align">
               The essence of a control theoretic approach is to: 1) develop a 
               measure of profitability of the trading portfolio, 2) 
               computationally model the trading process operating on the 
               price-time histories, 3) calculate estimates of the price-time 
               histories using functions with well-known mathematical 
               characteristics, 4) calculate, using the calculated estimates, 
               derived functions of the price-time histories about which control 
               variables are known and about which there is .a priori knowledge, 
               5) simulate, using the derived functions, the trading policies and 
               seek the values of the control variables that maximize the 
               portfolio’s trading performance over the life of the trading 
               instruments. A realizable optimal control strategy is a direct 
               extrapolation of the optimal simulation of trading into the future, 
               day by day.
            </p>
            <p class="left-align">
              <i>
                Keywords: managed futures, quantitative analysis, trading 
                systems, trading simulation, dynamic systems, estimation and 
                control. 
              </i>
            </p>
            <p class="left-align">
              <img src="../../assets/images/CF2004.jpg">
            </p>
            <p class="left-align">
              <i>
                Computational Finance and Its Applications 
              </i>
              Edited by: Wessex Institute of Technology, UK ISBN: 1-85312-709-4 Published: 2004,  WIT Press, Pages: 320pp Hardback 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<style scoped>
mark{
    background-color: white;
}
.imglarge{
  width: 100%;
}
@media screen and (max-width: 900px){
  .imglarge{
  width: 100%;
  height: auto;
  }
}
</style>
