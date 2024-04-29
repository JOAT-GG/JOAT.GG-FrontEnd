"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import {useRouter} from "next/navigation";
import {defaultLayoutStyles} from "@/styles/layout";
import React from "react";


interface BaseLayoutProps {
  children: React.ReactNode;
  layoutStyle?: React.CSSProperties;
}

const BaseLayout = ({
  children,
  layoutStyle = defaultLayoutStyles
}:BaseLayoutProps) => {

  return (
    <div style={layoutStyle}>
      <div style={layoutStyle} >
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )

}


export default BaseLayout
