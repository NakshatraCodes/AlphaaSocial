import React ,{useState,useEffect}from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import {IconButton} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
const ReactGridLayout = WidthProvider(RGL);

const TodoList =(props)=> {
  const [layout, setLayout] = useState(props.taskList);
  useEffect(() => {
        setLayout(props.taskList)
  }, [props.taskList]);
  // static defaultProps = {
  //   isDraggable: true,
  //   isResizable: true,
  //   items: 5,
  //   rowHeight: 30,
  //   preventCollision: false,
  //   cols: 12,
  // };
console.log('taskList-------',props.taskList)

    return (
      <React.Fragment>
        {/* <button onClick={this.addNewItem}>Add item</button> */}
        <ReactGridLayout
          {...props}
        >
          {layout.map(item => (
            <div key={item.i} data-grid={item}>
               <IconButton className="edit"
                           aria-label="Close"
            >
            <Edit />
            </IconButton>
             <IconButton className="delete"
            aria-label="Close"
            >
            <Delete />
            </IconButton>
              <h3>{item.task}</h3>
              <p>{item.description}</p>

            </div>
          ))}
        </ReactGridLayout>
      </React.Fragment>
    );

  // addNewItem = () => {
  //   const { layout } = this.state;
  //   const newItem = { x: 0, y: 0, w: 3, h: 3, i: getId() };

  //   if (layout.some(item => item.x === 0 && item.y === 0)) {
  //     this.setState({
  //       layout: layout
  //         .map(item => {
  //           if (item.x === 0) {
  //             return { y: item.y++, ...item };
  //           }

  //           return item;
  //         })
  //         .concat([newItem])
  //     });
  //   } else {
  //     this.setState({ layout: layout.concat([newItem]) });
  //   }
  // };
}
 TodoList.defaultProps = {
    isDraggable: true,
    isResizable: true,
    items: 5,
    rowHeight: 30,
    preventCollision: false,
    cols: 12,
  }
export default TodoList;

