import React from "react";
import { priority_options } from "../../../data/app_data";
import RenderTasks from "../Tasks/components/RenderTasks";

class Dashboard extends React.Component {
  render() {
    const { tickets, search } = this.props;
    if (search) {
      console.log("yyyy");
    }
    return (
      <div className="dashboard--wrap">
        <h2 className="dashboard_title">Приоритет</h2>
        <div className="dashboard">
          {priority_options.map(item => {
            return (
              <div className="dashboard_item" key={item.id}>
                <div
                  className={`dashboard_item__head dashboard_item__head---priority-${
                    item.id
                  }`}
                >
                  {item.name}
                </div>
                <div className="dashboard_item__content">
                  <RenderTasks
                    priorityId={item.id}
                    tickets={tickets}
                    {...this.props}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Dashboard;