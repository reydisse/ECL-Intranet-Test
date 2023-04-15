import React, { useEffect, useState } from "react"
import { Col, Card, CardBody, Table } from "reactstrap"
import ReactApexChart from "react-apexcharts"

//redux
import { useSelector, useDispatch } from "react-redux"

//actions
import { getTopSellingProduct } from "../../store/actions"

const getChartOptions = index => {
  var options = {
    chart: { sparkline: { enabled: !0 } },
    dataLabels: { enabled: !1 },
    colors: ["#556ee6"],
    plotOptions: {
      radialBar: {
        hollow: { margin: 0, size: "60%" },
        track: { margin: 0 },
        dataLabels: { show: !1 },
      },
    },
  }
  switch (index) {
    case 1:
      options["colors"][0] = "#556ee6"
      break
    case 2:
      options["colors"][0] = "#34c38f"
      break
    case 3:
      options["colors"][0] = "#f46a6a"
      break
    default:
      break
  }

  return options
}

const TopMonthlyProjects = props => {
  const dispatch = useDispatch()

  const { projectData } = useSelector(state => ({
    projectData: state.DashboardSaas.projectData,
  }))

  useEffect(() => {
    dispatch(getTopSellingProduct("jan"))
  }, [dispatch])

  const [selectedMonth, setSelectedMonth] = useState("jan")

  const onChangeMonth = value => {
    setSelectedMonth(value)
    dispatch(getTopSellingProduct(value))
  }

  return (
    <>
      <Col xl="4">
        <Card>
          <CardBody>
            <div className="clearfix">
              <div className="float-end">
                <div className="input-group input-group-sm">
                  <select
                    className="form-select form-select-sm"
                    value={selectedMonth}
                    onChange={e => {
                      onChangeMonth(e.target.value)
                    }}
                  >
                    {[
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map(month => (
                      <option key={month} value={month.toLowerCase()}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <label className="input-group-text">Month</label>
                </div>
              </div>
              <h4 className="card-title mb-4">Monthly Projects</h4>
            </div>

            <div className="text-muted text-center">
              <p className="card-title mb-4">{selectedMonth.toUpperCase()}</p>
            </div>

            <div className="table-responsive mt-4">
              <Table className="table align-middle mb-0">
                <tbody>
                  {(projectData || []).map((data, key) => {
                    const options = getChartOptions(key + 2)
                    return (
                      <tr key={key}>
                        <td>
                          <h5 className="font-size-14 mb-1">{data.name}</h5>
                          <p className="text-muted mb-0">{data.desc}</p>
                        </td>

                        <td></td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}

export default TopMonthlyProjects
