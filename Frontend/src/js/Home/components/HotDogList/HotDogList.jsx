import React, { Component, Fragment } from "react";
import { Edit, Delete, Checked } from "../../../../assets/icons";
import { Button, HiddenInput } from "../../../../components/UI";
import styles from "./HotDogList.scss";
import cx from "classnames";

export class HotDogList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHotDogCheck: false,
      hotDogItems: []
    };
  }

  componentDidMount() {
    const { hotDods } = this.props;
      this.setState({
        hotDogItems: hotDods.map(item => {
          return { ...item, isActive: false };
        })
      });
  }

  componentDidUpdate(prevProps) {
    const { hotDods } = this.props;
    if (this.props.hotDods !== prevProps.hotDods) {
      this.setState({
        hotDogItems: hotDods.map(item => {
          return { ...item, isActive: false };
        })
      });
    }
  }

  onCompleteChange() {
    const { fetchHotDogRequest } = this.props;
    const { hotDogItems, newHotDogCheck } = this.state;
    let current = null;
    const titles = [];
    const newCategoryArray = hotDogItems.map(item => {
      if (item.isActive) {
        current = {
          name: item.name.trim(),
          __v: item.__v,
          _id: item._id
        };
        titles.push(item.name.trim());
        return { ...item, isActive: false };
      } else {
        titles.push(item.name.trim());
        return { ...item, isActive: false };
      }
    });
    this.setState({ hotDogItems: newCategoryArray,  newHotDogCheck: false});
    if (newHotDogCheck) {
      if (current.name !== "") {
        fetchHotDogRequest({ param: current, status: "post", titles });
      }
    } else {
      fetchHotDogRequest({ param: current, status: "put", titles });
    }
  }

  pushCategory() {
    const { hotDogItems, newHotDogCheck } = this.state;
    let correctionArray = hotDogItems.map(item => {
      return { ...item, isActive: false };
    });
    correctionArray.push({ name: "", isActive: true });
    this.setState({
      hotDogItems: correctionArray,
      newHotDogCheck: true
    });
  }

  onChangeInput(e, _id) {
    const { hotDogItems } = this.state;
    const newCategoryArray = hotDogItems.map(item => {
      return item._id === _id
        ? { ...item, name: e.target.value }
        : { ...item };
    });
    this.setState({ hotDogItems: newCategoryArray });
  }

  onCorrectionActive(_id) {
    const { hotDogItems, newHotDogCheck } = this.state;

    this.setState({
      newHotDogCheck: false,
      hotDogItems: hotDogItems.map(item => {
        return item._id === _id
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      })
    });
  }

  onDelete(_id) {
    const { fetchHotDogRequest } = this.props;
    const { hotDogItems } = this.state;
    let current = null;
    const newCategoryArray = hotDogItems.filter(item => {
      if (item._id === _id) {
        current = {
          _id: item._id
        };
        return false;
      } else {
        return true;
      }
    });
    this.setState({ hotDogItems: newCategoryArray });
    fetchHotDogRequest({ param: current, status: "delete" });
  }

  render() {
    const { hotDogItems, newHotDogCheck } = this.state;
    return (
        <section className={styles.wrap}>
          <div className={styles.container}>
            <div className={styles.box}>
              <Button
                onClick={() => this.pushCategory()}
                title="Додати"
                disabled={newHotDogCheck && true}
              >
              </Button>
            </div>
          </div>
          <div className={cx([styles.container, styles.content])}>
            <div className={styles.box}>
              {hotDogItems.map((item, index) => {
                return (
                  <div className={styles.box_list} key={index}>
                    <span
                      onClick={() =>
                        !item.isActive && this.onCorrectionActive(item._id)
                      }
                    >
                      {!item.isActive && <Edit />}

                    </span>
                    <span onClick={() => this.onDelete(item._id)}>
                      <Delete />
                    </span>
                    <span className={styles.title}>
                      <HiddenInput
                        value={item.name}
                        disabled={item.isActive}
                        onChange={e => this.onChangeInput(e, item._id)}
                        type={"text"}
                      />
                    </span>
                    {item.isActive && (
                      <Fragment>
                        <span
                          className={styles.checked}
                          onClick={() => this.onCompleteChange(item)}
                        >
                          <Checked />
                        </span>
                      </Fragment>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
    );
  }
}
