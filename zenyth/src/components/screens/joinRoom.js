import React, { useEffect} from 'react';

import { joinGameroom } from '../../hooks/useGameroomData';
import { getToken } from '../../utils/token';

import { useNavigate } from 'react-router';

const JoinRoom = () => {

    const params = new URLSearchParams(window.location.search);
    const token = getToken();
    const history = useNavigate();

    useEffect(() => {
        if (params.get("token")) {
            joinGameroom({token: params.get("token")}, token).then((data) => {
                history.push(`/load-game`);
            });
        } else {
            history(-1);
        }
    })

    return (
        <>
        </>
    );
};

export default JoinRoom;