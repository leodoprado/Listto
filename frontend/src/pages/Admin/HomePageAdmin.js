import React from "react";
import { useState, useEffect } from "react";

import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdminComponent'
import ContentAdmin from "../../components/ContentAdmin/ContentAdmin";

import api from "../../services/api";
import axios from "axios";

const HomePageAdmin = () => {

  useEffect(() => {
    api.get('/admin').then(res => {
      console.log(res.data)
    })
  }, [])

  return (
    <>
        <HeaderAdmin />
        <ContentAdmin />
    </>
  )
}

export default HomePageAdmin