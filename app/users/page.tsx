//'use client';
import { signOut } from "next-auth/react";
import EmptyState from "../components/EmptyState";

//lg pl-80是指给这个组件中的元素向左添加一个80px的pandding
const Users = () =>{
    return (
        <div className="hidden lg:block lg:pl-80 h-full"> 

        <EmptyState/>
        </div>

    );
}

export default Users;