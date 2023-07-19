import React, { Component } from "react"
import DBcard from "./DBcard"
import Chart from "react-apexcharts"
import { barChartData, barChartOptions } from "../../../data/charts"

class ChartBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chartData: [],
      chartOptions: {},
    }
  }

  componentDidMount() {
    this.setState({
      chartData: barChartData,
      chartOptions: barChartOptions,
    })
  }

  render() {
    return (
      <DBcard
        py="1rem"
        height={{ sm: "200px" }}
        width="100%"
        bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
        position="relative"
        borderRadius="8"
      >
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="100%"
        />
      </DBcard>
    )
  }
}

export default ChartBar
