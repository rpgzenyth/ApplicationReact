import React, { useEffect} from 'react';

import { joinGameroom } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';

import { useHistory } from 'react-router';

const JoinRoom = () => {

    const params = new URLSearchParams(window.location.search);
    const token = getToken();
    const history = useHistory();

    useEffect(() => {
        if (params.get("token")) {
            joinGameroom({token: params.get("token")}, token).then((data) => {
                history.push(`/load-game`);
            });
        }
    })

    return (
        <>
        </>
    );
};

export default JoinRoom;