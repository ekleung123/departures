import { useState } from "react";
import { useGetFlights } from "../hooks/useGetFlights";
import { useAddFlight } from "../hooks/useAddFlight";
import { useDeleteFlight } from "../hooks/useDeleteFlight";
import { useEditFlight } from "../hooks/useEditFlight";

import Form from "../components/admin/Form";
import Spinner from "../components/admin/Spinner";
import FlightList from "../components/admin/FlightList";
import Notice from "../components/admin/Notice";
import PageHeader from "../components/all/PageHeader";
import { minEntry } from "../constants/text";
import AddButton from "../components/admin/AddButton";
import { initDbError } from "../constants/text";

export default function Admin(){
 
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showAddFlightLink, setShowAddFlightLink] = useState(true);
  const [editItem, setEditItem] = useState(false);
  
  const {flights, isLoading_Get, flightsNotVisible} = useGetFlights();
  const {addFlight, isLoading_Add, showNote_Add, setShowNote_Add} = useAddFlight();
  const {deleteFlight, isLoading_Delete, showNote_Delete, setShowNote_Delete} = useDeleteFlight();
  const {editFlight, isLoading_Edit, showNote_Edit, setShowNote_Edit} = useEditFlight();

  const clickAdd = data => {
    let id = flightsNotVisible[0].id;
    addFlight(data, id);
    setShowAddForm(false);
    setShowAddFlightLink(true);
  };

  const clickEdit = data => {
    editFlight(data);
    setShowEditForm(false);
    setShowAddFlightLink(true);
  };

  const clickDelete = data => {
    console.log("clickDelete handler", flightsNotVisible);
    if ((15 - flightsNotVisible.length) < 11) {
      alert(minEntry);
      return;
    }
    if (!showEditForm && !showAddForm) deleteFlight(data);
  };

  const clickFillEdit = data => {
    if (!showEditForm && !showAddForm) {
      closeNotice();
      setEditItem(data);
      setShowAddForm(false);
      setShowEditForm(true);
      setShowAddFlightLink(false);
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  };

  const clickClose = () => {
    setShowAddForm(false);
    setShowEditForm(false);
    setShowAddFlightLink(true);
  };

  const closeNotice = () => {
    setShowNote_Edit(null);
    setShowNote_Add(null);
    setShowNote_Delete(false);
  };

  const showSpinner = (isLoading_Get || isLoading_Add || isLoading_Delete || isLoading_Edit);
  const showNotice = (showNote_Edit || showNote_Add || showNote_Delete);

  return ( 
    <div className="container" style={{marginTop: 10}}> 
      { showSpinner && <Spinner /> }
    
      { 
        (flights.length > 0) && (
          <PageHeader 
            type="admin" 
            flights={flights} 
            isBtnHidden={showEditForm || showAddForm} 
          />
        )
      }

      { 
        (flights.length=== 0) && (
          <p>{initDbError}</p>
        )
      }

      { showNotice && 
        <Notice 
          closeNotice={closeNotice}
          showNote_Edit={showNote_Edit}
          showNote_Add={showNote_Add}
          showNote_Delete={showNote_Delete}
        /> 
      }

      { showAddForm && 
        <Form 
          type="add" 
          closeSubmit={clickClose} 
          formSubmit={clickAdd}
        /> 
      }

      { showEditForm && 
        <Form 
          type="edit" 
          closeSubmit={clickClose} 
          flightObj={editItem} 
          formSubmit={clickEdit} 
        /> 
      }

      { (showAddFlightLink && flights.length > 0) && 
        <AddButton 
          closeNotice={closeNotice}
          setShowAddForm={setShowAddForm}
          setShowEditForm={setShowEditForm}
          setShowAddFlightLink={setShowAddFlightLink}
          flights={flights}
          flightsNotVisible={flightsNotVisible}
        />        
      }

      <FlightList 
        flights={flights} 
        clickDelete={clickDelete} 
        clickEdit={clickFillEdit} 
        grayOut = {showEditForm || showAddForm}
      />

      <p>Number of listed flights: {(15 - flightsNotVisible.length)}</p>
    </div>
  );
};