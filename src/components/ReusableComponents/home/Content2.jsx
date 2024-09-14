import React from 'react'

export const Ccard = (props) => {

    return (
        <>
            <div
                style={{
                    width: "300px",
                    padding: "20px",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.1)",
                    textAlign: "left",
                    fontFamily: "'Arial', sans-serif"
                }}
            >
                {/* Icon */}
                <div style={{ marginBottom: "15px" }}>
                    <div
                        style={{
                            width: "40px",
                            height: "40px",
                            backgroundColor: "#00C853",
                            borderRadius: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <span style={{ fontSize: "24px", color: "white" }}>🏷️</span>
                    </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "20px", margin: "0 0 10px 0", color: "#212121" }}>
                    Self-paced Courses
                </h3>

                {/* Description */}
                <p style={{ fontSize: "14px", color: "#757575", margin: "0 0 20px 0" }}>
                    Learn & get certified via online courses
                </p>

                {/* Link */}
                <a
                    href="#"
                    style={{
                        fontSize: "14px",
                        color: "#00C853",
                        fontWeight: "bold",
                        textDecoration: "none",
                    }}
                >
                    Take a look &gt;
                </a>
            </div>
        </>
    )

}



export default function Content2() {
    return (
        <>
            <div className="content3">
                <Ccard />
            </div>
        </>
    )
}
