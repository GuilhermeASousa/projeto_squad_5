import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="cardd">
            <FormDialog
                open={open}
                setOpen={setOpen}
                title={props.name}
                description={props.description}
                developers={props.developers}
                category={props.category}
                repository={props.repository}
                view={props.view}
                listCard={props.listCard}
                setListCard={props.setListCard}
                id={props.id}
            />
            <div className="carddd">
                <div className="card-container" onClick={() => setOpen(true)}>
                    <h1 className="card-title">{props.name}</h1>
                    <h2>{props.category}</h2>
                    <h4 className="card-developers">{props.developers}</h4>
                    <br />
                    <h3 className="card-description">{props.description}</h3>
                    <h3>{props.repository}</h3>
                    <h3>{props.view}</h3>
                </div>
            </div>

        </div>
    );
}
