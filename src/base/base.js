import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { AddUser } from "../component/AddUser";
import { BlankPage } from "../component/Blank";
import { data } from "../component/data";
import { EditUser } from "../component/Edit";
import { NavBar } from "../component/NavBar";
import { DashBoard } from "../component/Read";
import { ViewUser } from "../component/View";

export default function BaseApp() {
    const [user, setUser] = useState(data)
    return (
        <div className="grid">
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <DashBoard user={user} setUser={setUser} />
                </Route>

                <Route path="/add">
                    <AddUser user={user} setUser={setUser} />
                </Route>

                <Route path="/view/:id">
                    <ViewUser user={user} />
                </Route>

                <Route path="/edit/:id">
                    <EditUser  user={user} setUser={setUser} />
                </Route>

                <Route path="**">
                    <BlankPage/>
                </Route>

            </Switch>
        </div>
    )
}