'use client'

import Header from "@/components/Container/Header";

const Container = ({ children }) => <div className="container">{children}</div>

export default Object.assign(Container, { Header })