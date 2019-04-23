import React from "react";
import UISelect from "../../../UiComponents/UISelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { status_options } from "../../../../data/app_data";

class TaskConteiner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenMinBlock: false,
      saveStatus: false,
      ticket: { ...props.item }
    };
  }
  toggleMainBlock = () => {
    this.setState({
      isOpenMinBlock: !this.state.isOpenMinBlock
    });
  };
  onChangeTicketStaus = event => {
    let value = event.target.value;
    this.setState(
      PrevState => ({
        ticket: {
          ...PrevState.ticket,
          status: value
        }
      }),
      () => {
        this.toggleStatus();
      }
    );
  };
  toggleStatus = () => {
    this.setState({
      saveStatus: !this.state.saveStatus
    });
  };

  saveStatus = () => {
    this.props.updateTicket(this.state.ticket.id, this.state.ticket);
    this.toggleStatus();
  };
  resetStatus = () => {
    this.toggleStatus();
  };
  render() {
    const { priority, title, desc, image, status } = this.state.ticket;
    return (
      <div className="task-container">
        <div className="task-container_header">
          <FontAwesomeIcon
            icon={faBookmark}
            className={`priority-${priority}`}
          />
          <h4 className="task-container_header__title">{title}</h4>
          <FontAwesomeIcon
            icon={faCaretDown}
            className={
              this.state.isOpenMinBlock
                ? "task-container_header__caret open"
                : "task-container_header__caret"
            }
            onClick={this.toggleMainBlock}
          />
        </div>
        {this.state.isOpenMinBlock && (
          <div className="task-container_main-content">
            <p className="task-container_main-content__desc">{desc}</p>
            {image && (
              <img
                src={image}
                className="task-container_main-content__img"
                alt="task"
              />
            )}
            <div className="ticketStatus">
              <UISelect
                wraper="ticketStatus-group"
                id="ticketStatus"
                labelText="статус"
                onChange={this.onChangeTicketStaus}
                options={status_options}
                defaultStatus={status}
              />
              {this.state.saveStatus && (
                <div className="saveStatus">
                  <p className="saveStatus_title">охранить изменнения?</p>
                  <button className="saveStatus_btn" onClick={this.saveStatus}>
                    Да
                  </button>
                  <button className="saveStatus_btn" onClick={this.resetStatus}>
                    Нет
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default TaskConteiner;
