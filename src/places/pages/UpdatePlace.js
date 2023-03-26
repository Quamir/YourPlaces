import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE, } from "../../shared/components/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import Input from "../../shared/components/FormElements/Input";
import Button from "../..//shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";

import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Washington Monumnet",
    description:
      "Landmark obelisk rising from the National Mall that honors America's first president.",
    imageUrl:
      "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTk0MzI4MDQyMzgwODYyOTgx/gettyimages-1133774747.jpg",
    address: "2 15th St NW, Washington, DC 20024",
    location: {
      lat: 38.8894838,
      lng: -77.0396565,
    },
    creator: "u1",
  },

  {
    id: "p2",
    title: "Los Angeles County Museum of Art",
    description:
      "This 20-acre campus with diverse collections spanning art history also offers screenings & concerts.",
    imageUrl:
      "https://a.cdn-hotels.com/gdcs/production27/d1205/e771c8f0-d401-4969-aa59-ef6ff7802da2.jpg",
    address: "5905 Wilshire Blvd, Los Angeles, CA 90036",
    location: {
      lat: 34.0639296,
      lng: -118.3589711,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
