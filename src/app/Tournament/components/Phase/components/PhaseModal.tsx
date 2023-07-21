import { useQuery } from "@apollo/client";
import { Button, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Skeleton } from "@chakra-ui/react"
import { useEffect } from "react";
import { GET_PHASE_GROUP } from "../queries/GET_PHASE_GROUP";
import { useNavigate, useOutletContext } from "react-router-dom";

export function PhaseModal(props: {isOpen: boolean, onClose: () => void, phaseGroupId: any }){

    const [ phaseGroupId, isOpen, onClose ] = useOutletContext();

    const { loading, error, data } = useQuery(GET_PHASE_GROUP, {
        variables: {
            phaseGroupId: phaseGroupId
        }
    })

    const navigate = useNavigate()

    function onModalClose(){
        navigate('../')
        onClose()
    }

    const phaseGroup = data?.phaseGroup

    return(
        <Modal
            isCentered
            onClose={onModalClose}
            isOpen={isOpen}
            motionPreset='slideInBottom'
        >
            
            <ModalOverlay />
            <ModalContent>
                {phaseGroupId}
            {loading && <Skeleton />}
            {data && <ModalHeader>Pool {phaseGroup.displayIdentifier}</ModalHeader>}
            <ModalCloseButton />
            
            <ModalBody>
            {loading && <Skeleton />}
            {data && 
                <a target='_blank' href={phaseGroup.bracketUrl}>{phaseGroup.bracketUrl}</a>
            }
            </ModalBody>
            <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onModalClose}>
                Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}