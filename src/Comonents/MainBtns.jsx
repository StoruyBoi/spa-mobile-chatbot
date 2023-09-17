import React, { useEffect, useState } from "react";
import "../App.css";
export default function MainBtns(props) {
  const id = 1;
  const Day = [
    {
      date: "07 MAY",
      day: " MON",
    },
    {
      date: "08 MAY",
      day: " TUE",
    },
    {
      date: "09 MAY",
      day: " WED",
    },
    {
      date: "10 MAY",
      day: " THU",
    },
    {
      date: "11 MAY",
      day: " FRI",
    },
  ];
  const Time = [
    {
      noon: "04:00 PM",
      mor: "08:00 AM",
    },
    {
      noon: "05:00 PM",
      mor: "09:00 AM",
    },
    {
      noon: "06:00 PM",
      mor: "10:00 AM",
    },
    {
      noon: "07:00 PM",
      mor: "11:00 AM",
    },
    {
      noon: "08:00 PM",
      mor: "12:00 PM",
    },
  ];

  // State to keep track of selected checkboxes
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isElementVisible, setElementVisibility] = useState(true);
  // Function to update the selectedOptions state when a checkbox is clicked
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;

    // If the checkbox is checked, add its value to the selectedOptions array
    // If it's unchecked, remove its value from the array
    if (checked) {
      setSelectedOptions((prevSelected) => [...prevSelected, value]);
    } else {
      setSelectedOptions((prevSelected) =>
        prevSelected.filter((option) => option !== value)
      );
    }
    // if(selectedOptions.flat((a)=>a).length   ==1){
    //   const datas=selectedOptions;
    //   console.log(datas);
    //   props.actions.timePasss(datas)
    // }else{
    //   null
    // }
    //   };
  };
  useEffect(() => {
    // Display the selected options in the h1 element
    const datas = selectedOptions.join();
    selectedOptions.length == 2
      ? (props.actions.timePasss(datas), setElementVisibility(false))
      : "None selected";
  }, [selectedOptions]);

  return (
    <>
      {isElementVisible && (
        <section className="Main_cont">
          <div key={id} className="day_cont forscroll">
            {Day.map((itemTime) => {
              return (
                <>
                  <label className="control">
                    <input
                      type="checkbox"
                      id="technology"
                      name="check"
                      onChange={handleCheckboxChange}
                      value={itemTime.date + itemTime.day}
                    />
                    <span className="control__content">
                      <p>{itemTime.date}</p> <p id="target"> {itemTime.day}</p>
                    </span>
                  </label>
                </>
              );
            })}
          </div>
          <div className="Time_cont forscroll">
            <p>Morning</p>
            <div className="timeSLot">
              {Time.map((itmeTIme) => {
                return (
                  <>
                    <label className="control">
                      <input
                        type="checkbox"
                        id="technology"
                        onChange={handleCheckboxChange}
                        value={itmeTIme.mor}
                        name="check"
                      />
                      <span className="control__content">
                        <p>{itmeTIme.mor}</p>
                      </span>
                    </label>
                  </>
                );
              })}
            </div>

            <div className="time_box2">
              <p>NOON</p>
              <h1></h1>
              <div className="timeSLot forscroll">
                {Time.map((itmeTIme) => {
                  return (
                    <>
                      <label className="control">
                        <input
                          type="checkbox"
                          id="technology"
                          value={itmeTIme.noon}
                          onChange={handleCheckboxChange}
                          name="check"
                        />
                        <span className="control__content">
                          <p>{itmeTIme.noon}</p>
                        </span>
                      </label>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
