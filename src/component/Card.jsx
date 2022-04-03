// 信息展示卡片
import * as React from 'react';
import { bgColorShallow, mainColor, textColor } from "../style"

export const BtnGroup = (props) => {
    const { okText, onOk, cancelText, onCancel, SmallLoading } = props

    return (
        <div style={{
            display: "flex",
            justifyContent: "flex-end",
        }}>
            {onCancel && <div className='flex-center' style={{
                cursor: "pointer",
                color: mainColor,
            }}
                onClick={onCancel}
            >{cancelText || "Cancel"}</div>}
            {onOk &&
                <div
                    className='flex-center'
                    style={{
                        background: mainColor,
                        borderRadius: 2,
                        padding: "5px 10px",
                        color: "white",
                        cursor: "pointer",
                        marginLeft: 30,
                        width: 80
                    }}
                    onClick={onOk}
                ><SmallLoading size={22} color={"white"} >
                        {okText || "Submit"}
                    </SmallLoading>
                </div>}
        </div>
    )
}

export const Input = (props) => {
    const { width, placeholder, value, setValue, type, maxLength, disabled, inputType } = props;

    return (
        <div style={{ marginTop: 5, width: "100%" }}>
            <input
                type={inputType || "text"}
                placeholder={placeholder}
                value={value}
                onChange={(val) => {
                    setValue((pre) => ({ ...pre, [type]: val.target.value }))
                }}
                disabled={disabled}
                maxLength={maxLength}
                style={{
                    border: "none",
                    color: mainColor,
                    padding: 10,
                    height: 40,
                    width: width || "100%",
                    background: bgColorShallow,
                    outline: "none",
                }}
            />
        </div>
    );
}

export const LabelBox = (props) => {
    const { title, children, width } = props;

    return (
        <div style={{ marginBottom: 30, fontSize: 16, width: width || "100%" }}>
            {<div style={{ marginTop: 10, color: textColor }}>{title}</div>}
            {children}
        </div>
    );
}

export const CardBox = (props) => {
    const { title, css, children } = props;

    return (
        <div className='mine_team' style={{
            boxShadow: `0px 0px 10px ${mainColor}`,
            borderRadius: 10,
            padding: 20,
            overflow: "scroll",
            ...css
        }}>
            <div style={{ overflow: "scroll", height: "100%" }}>
                {title && <div style={{ textAlign: "center", color: mainColor, fontSize: "2.5em", fontWeight: 700, marginTop: 20, marginBottom: 30 }}>{title}</div>}
                {children}
            </div>
        </div>
    );
}
