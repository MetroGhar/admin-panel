import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    projectname: "",
    projectlocation: "",
    projectlocality: "",
    projectcity: "",
    projectstate: "",
    projecttype: "Residential",
    projectsubtype: "Appartment",
    projectconfiguration: [],
    projectpossessionstatus: "",
    projectarea: 0,
    projectfacing: "",
    projectfurnishing: "",
    projectreranumber: "",
    projectminspace: 0,
    projectmaxspace: 0,
    projectminprice: 0,
    projectmaxprice: 0,
    aboutproject: "",
    projectspecification: "",
    externalimages: [],
    internalimages: [],
    amenitiesimages: [],
    othersimages: [],
    floorplan: [],
    country: "",
    projectlongitude: "",
    projectlatitude: "",
    buildername: "",
    builderimage: "",
    builderaddress: "",
    builderyoe: 0,
    builderlocality: "",
    builderproject: "",
    companytype: "",
    buildercontact: 0,
    builderwebsite: "",
    builderemail: "",
    builderdescription: "",
    ocimage: "",
    ccimage: "",
    khatano: 0,
    khatatype: "",
    reraapproved: false,
    reraauthority: "",
    tag: [],
    projectamenities: []
}

const propertySlice = createSlice({
    name:"property",
    initialState,
    reducers:{
        getAllProperty: (state,action) => {
            state[action.payload.name] = action.payload.data;
        }
    }
});

export const {getAllProperty} = propertySlice.actions
export default propertySlice.reducer;