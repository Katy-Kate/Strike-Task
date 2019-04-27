import React from "react";
import UIField from "../../../UiComponents/UIField";
import UITextarea from "../../../UiComponents/UITextarea";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { saveUserInLocalStorage } from "../../../../data/UserRepository";
import { priority_options } from "../../../../data/app_data";
import UISelect from "../../../UiComponents/UISelect";
import PropTypes from "prop-types";

class CreateNewTask extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      title: "",
      desc: "",
      file: null,
      status: "1", //----new !
      priority: "1",
      id: Math.floor(Math.random(0, 1) * 100000000)
    };
  }
  onChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };
  onChangeCustomFile = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = event => {
        this.setState({
          file: event.target.result
        });
      };
      reader.readAsDataURL(file);
    }
  };
  removeCustomFile = () => {
    this.setState({
      file: null
    });
  };
  checkIsStateEmpty = () => {
    let isStateEmpty = false;
    for (let key in this.state) {
      if (this.state[key]) {
        isStateEmpty = true;
      }
    }
    return isStateEmpty;
  };

  saveNewTask = () => {
    if (this.state.title) {
      let isStateEmpty = this.checkIsStateEmpty();
      if (isStateEmpty) {
        let user = JSON.parse(localStorage.getItem("user"));
        user.tickets.push(this.state);
        this.props.saveUser(user);
        saveUserInLocalStorage(user);
        this.resetState();
        this.props.toogleTaskModul();
      } else {
        alert("вы не заполнили ни одного поля ");
      }
    } else {
      alert("введите заглавие!");
    }
  };
  resetState = () => {
    this.setState({
      title: null,
      desc: null,
      file: null,
      status: [],
      priority: "1",
      id: Math.floor(Math.random(0, 1) * 100000000)
    });
  };

  render() {
    const { title, desc } = this.state;
    return (
      <div className="modalWrapper">
        <div className="new-task-block">
          <FontAwesomeIcon
            className="new-task-block_closeModale"
            icon={faTimesCircle}
            onClick={this.props.toogleTaskModul}
          />
          <h3>Создать новое задание</h3>
          <UIField
            id="title"
            type="text"
            placeholderText="ваше заглавие *"
            name="title"
            value={title}
            onChange={this.onChange}
            classNameWrap="new-task-block_group-field"
            classNameInput="new-task-block_field"
          />
          <UITextarea
            id="desc"
            type="text"
            placeholderText="Описание"
            name="desc"
            value={desc}
            onChange={this.onChange}
            classNameWrap="task-groupnew-task-block_group-field"
            classNameInput="ew-task-block_field"
          />
          <UISelect
            wraper="priority-group"
            id="priority"
            labelText="важность"
            onChange={this.onChange}
            options={priority_options}
            value={this.priority}
          />

          <div className="custom-file--wrap">
            {this.state.file && (
              <div className="custom-file_image">
                <img
                  alt="custom-file"
                  src={this.state.file}
                  title="custom-file"
                />
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="custom-file_icon-remove"
                  onClick={this.removeCustomFile}
                  title="удалить"
                />
              </div>
            )}

            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customfile"
                onChange={this.onChangeCustomFile}
              />
              <label className="custom-file-label" htmlFor="customfile">
                {this.state.file ? "выбрать новый файл" : "добавить файл"}
              </label>
            </div>
          </div>
          <FontAwesomeIcon
            icon={faPlus}
            className={
              this.state.title
                ? "new-task-block_btn"
                : "new-task-block_btn new-task-block_btn--disabled"
            }
            onClick={this.saveNewTask}
            title="cохранить"
          />
        </div>
      </div>
    );
  }
}
export default CreateNewTask;

CreateNewTask.propTypes = {
  toogleTaskModul: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};