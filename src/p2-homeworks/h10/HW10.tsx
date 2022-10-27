import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC, StateType} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from "../h10/spinner.module.css"

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const loading = false
    let isLoading = useSelector<AppStoreType,  StateType>(state => state.loading)
     let download = isLoading.isLoading
    console.log(download)
    const setLoading = () => {
        // dispatch
        // setTimeout

         dispatch(loadingAC(true))
        setTimeout(()=>{dispatch(loadingAC(false))}, 5000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {/*{loading*/}
            {download
                ? (
                    // <div>крутилка...</div>
                    <div className={s.ldsRing}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
