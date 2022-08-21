import React, {useState} from 'react'
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlane, faCar, faTaxi, faCalendarDays, faPerson } from '@fortawesome/free-solid-svg-icons'
import {  DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import format from 'date-fns/format';

const Header = ({type}) => {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

    const [openDate, setOpenDate] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        rooms: 0
    })
    
    const handleOption=(name, operation, e)=>{
     setOptions(prev=> {return {
        ...prev, [name]: operation ==='i'? options[name] +1: options[name] -1
        
}})
}
  return (
    <div className='header'>
        <div className= {type ==="list"? "headerContainer listMode": "headerContainer"}>
            <div className="headerList">
                <div className="headerListItem active"> 
                    <FontAwesomeIcon icon={faBed} /> 
                    <span>Stays</span>
                </div>
                <div className="headerListItem"> 
                    <FontAwesomeIcon icon={faPlane} /> 
                    <span>Flight</span>
                </div>
                <div className="headerListItem"> 
                    <FontAwesomeIcon icon={faCar} /> 
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem"> 
                    <FontAwesomeIcon icon={faBed} /> 
                    <span>Attractions</span>
                </div>
                <div className="headerListItem"> 
                    <FontAwesomeIcon icon={faTaxi} /> 
                    <span>Airport taxis</span>
                </div>
            </div>
        {type !=='list' &&
        <>
        <h1 className="headerTitle">A lifetime of discount? It's Genius</h1>
        <p className="headerDesc"> Get rewarded for your travels- unlock instant savings of 10%
            or more with a free Deewan Reservation account </p>
         <button className='headerBtn'>Sign in/Register</button>
        
        <div className="headerSearch">
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className='headerIcon' /> 
                <input type='text' placeholder='Where are you going?' className='headerSearchInput'/> 
           </div>
            <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' /> 
                <span className='headerSearchText' onClick={()=> setOpenDate(!openDate)}>{format(date[0].startDate, 'dd/MM/yyyy')} to {format(date[0].endDate, 'dd/MM/yyyy')}</span>
               {openDate &&
                    <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                />
               }        
           </div>
           <div className='big'>
            <div className="headerSearchItem" >
                <FontAwesomeIcon icon={faPerson} className='headerIcon' /> 
                <span className='headerSearchText' onClick={()=> setOpenOptions(!openOptions)}>
                    {options.adult} {options.adult===1? 'Adult ' : 'Adults '} 
                    {options.children} {options.children===1? 'Child   ' :'Children '}  
                    {options.rooms} {options.rooms===1? 'Room' : 'Rooms'}
                </span>
            </div>
                {/* Options open only when openOptions is true */}
                {openOptions &&
                <div className="option">
                    <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "d")} disabled={options.adult<=1}> - </button>
                             <span className="optionCounterNumber">{options.adult}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}> + </button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("children", "d")} disabled={options.children<1}> - </button>
                             <span className="optionCounterNumber">{options.children}</span>
                            <button className="optionCounterButton" onClick={(name, operation)=>handleOption("children", "i")}> + </button>
                        </div>
                    </div>
                    <div className="optionItem">
                        <span className="optionText">Rooms</span>
                        <div className="optionCounter">
                            <button className="optionCounterButton" onClick={()=>handleOption("rooms", "d")} disabled={options.rooms<1}> - </button>
                             <span className="optionCounterNumber">{options.rooms}</span>
                            <button className="optionCounterButton" onClick={()=>handleOption("rooms", "i")}> + </button>
                        </div>
                    </div>
                </div>
                }
                </div>
            <div className="headerSearchItem"> 
                <button className="headerBtn">Search</button>
           </div>
          
        </div>
    </>}
     </div>
</div>
  )
}

export default Header