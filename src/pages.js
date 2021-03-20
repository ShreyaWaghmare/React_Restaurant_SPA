import React from "react";
import {Link,Outlet,useLocation} from "react-router-dom";

export function Home() {
    return(
        <div>
            <h1>[Home]</h1>
            <Link to="about">About</Link>
            <Link to="events">Events</Link>
            <Link to="contact">Contact</Link>
        </div>
    );
}

export function About() {
    return(
        <div>
            <h1>[About]</h1>
            <Link to="">Home</Link>
            <Link to="events">Events</Link>
            <Link to="contact">Contact</Link>
            <Outlet />
        </div>
    );
}

export function Events() {
    return(
        <div>
            <h1>[Events]</h1>
            <Link to="home">Home</Link>
        </div>
    );
}

export function Contact() {
    return(
        <div>
            <h1>[Contact]</h1>
            <Link to="home">Home</Link>
        </div>
    );
}

export function Oops404() {
    let location = useLocation();
    console.log(location)
    return(
        <div>
            <h1>Not found at {location.pathname}!</h1>
            <Link to="">Home</Link>
            <Link to="about">About</Link>
            <Link to="events">Events</Link>
            <Link to="contact">Contact</Link>
        </div>
    );
}