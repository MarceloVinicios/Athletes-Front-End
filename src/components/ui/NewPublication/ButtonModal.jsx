import React, { useState } from "react";
import { ButtonLoading } from "../../common/Header/StyledHeader";
import NewPublicationModal from "./Modal";

const ButtonPublicationModal = () => {
  const [isModalVisible, setModalIsVisible] = useState(false);

  function handleClickModal() {
    setModalIsVisible(!isModalVisible)
  }

  return (
    <div>
      <ButtonLoading onClick={handleClickModal}>
        <span>Carregar</span>
      </ButtonLoading>
      {isModalVisible ? <NewPublicationModal handleClickModal={handleClickModal}/> : null}
    </div>

  );
};

export default ButtonPublicationModal;
