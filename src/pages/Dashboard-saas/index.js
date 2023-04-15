import React from "react"
import { Container, Row, Col } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Components
import CardUser from "./card-user"
import CardWelcome from "./card-welcome"
import MiniWidget from "./mini-widget"
import TopMonthlyProject from "./Top-Monthly-Projects"
import Tasks from "./tasks"
import ChatBox from "./chat-box"

const DashboardSaas = props => {
  const reports = [
    {
      icon: "bx bx-briefcase-alt-2",
      title: "Projects",
      value: "View Projects",
      link: "/dashboard-saas",
    },
    {
      icon: "bx bx-calendar",
      title: "Calender",
      value: "View Calender",
      link: "/calendar",
    },
    {
      icon: "bx bx-chat",
      title: "Chats",
      value: "Send a message",
      link: "/chat",
    },
  ]

  //meta title
  document.title = "Corporate Intranet Dashboard"

  return (
    <>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Dashboard" />

          {/* Card User */}
          <CardUser />

          <Row>
            {/* welcome card */}
            <CardWelcome />

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
            {/* total selling product */}
            <TopMonthlyProject />

            {/* tasks */}
            <Tasks />

            {/* chat box */}
            <ChatBox />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default DashboardSaas
