import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import {
  GetAllPublications,
} from "../../api/PublicationApi";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Publication from "../../components/ui/Publication/Publication";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/helper/Loading";
import { ContainerPublication, NoContent } from "./StyledFeed";
import FeedContext from "./FeedContext";
import ModalConfirm from "../../components/helper/ModalConfirm/ModalConfirm";
import { Main } from "../Apresentation/StyledHome";

const Feed = () => {
  const { getAccessTokenSilently } = useAuth0();
  const { loading, error, request } = useFetch();
  const [publications, setPublications] = useState(null);
  const [noContentState, setNoContentState] = useState(null);
  const [reload, setReload] = useState(0);
  const [isModalVisible, setModalIsVisible] = useState(false);
  const [publicationId, setPublicationId] = useState(null);
  const [urls, setUrls] = useState(null);
  const [reloadComments, setReloadComments] = useState(0);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const token = await getAccessTokenSilently();
        const { url, options } = GetAllPublications(token);
        const { response, json } = await request(url, options);

        if (response.status === 200) {
          setPublications(json.publicationData);
        }

        if (response.status === 204) {
          setNoContentState("Sem conteúdo");
        }
      } catch (error) {
        console.error("Erro ao obter publicações:", error);
      }
    };

    fetchPublications();
  }, [reload, request, getAccessTokenSilently]);

  function reloadPublications() {
    setReload(reload + 1);
  }

  function reloadCommentsList() {
    setReloadComments(() => reloadComments + 1);
  }

  function handleClickModal() {
    setModalIsVisible(!isModalVisible);
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <FeedContext.Provider
      value={{
        reloadComments,
        reloadCommentsList,
        reloadPublications,
        reload,
        handleClickModal,
        publicationId,
        setPublicationId,
        urls,
        setUrls,
      }}
    >
      <Main>
        <SideBar />
        <ContainerPublication>
          {isModalVisible && (
            <ModalConfirm
              handleClickModal={handleClickModal}
              publicationId={publicationId}
            />
          )}
          {noContentState && (
            <NoContent>
              <p>{noContentState}</p>
            </NoContent>
          )}
          {publications &&
            !noContentState &&
            publications.map((publication) => (
              <Publication
                userId={publication.user?.id}
                pictureUser={publication.user?.picture}
                nameUser={publication.user?.name}
                publicationId={publication.id}
                mediaPublication={publication.url}
                descriptionPublication={publication.description}
                key={publication.id}
                likes={publication.likes}
                publication_at={publication.publication_at}
              />
            ))}
        </ContainerPublication>
      </Main>
    </FeedContext.Provider>
  );
};

export default withAuthenticationRequired(Feed, {
  onRedirecting: () => <Loading />,
});
