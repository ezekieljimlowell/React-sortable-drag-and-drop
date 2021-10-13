import React, { useState } from "react";
import { ReactSortable } from "react-sortablejs";
import { DragHandle } from './DragHandle';

const App = () => {
  const [state, setState] = useState([]);
  let [place, setPlace] = useState([]);

  const AddComponent = () => {
    const removePlace = (e) => {
      e.preventDefault();
      const nonMutable = [...state];
      nonMutable.splice(nonMutable.indexOf(), 1);
      setState(nonMutable);
      console.log(nonMutable);
    }

    const changePlace = (e) => {
      e.preventDefault();
      const name = e.target.name;
      const value = e.target.value;
      setPlace([
        ...place,
        { [name]: value }
      ]);
      console.log(name)
    }
    console.log( place)
    return (
      <div>
        <input name={place.value} type="text" onChange={(e) => changePlace(e)} value={place.value}></input>
        <button type="button">Edit</button>
        <button type="button" onClick={(e) => removePlace(e)}>delete</button>
        <DragHandle />
      </div>
    )
  }

  const addStops = () => {
    setState([...state, { component: <AddComponent />, id: state.length, name: place }])
  }

  return (
    <div>
      <ReactSortable list={state} setList={setState}>
        {state.map((item) => {
          return (
            <div key={item.id}>{item.component}{item.id}</div>
          )
        })}
      </ReactSortable>
      <button onClick={addStops}>Add stops</button>
    </div>

  );
};

export default App;
