import Image from "next/image";
import { Container, Grid, Typography, Button, Hidden } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";

export default function HomePage() {
    const navbarRef = useRef();
    const [landingHeight, setLandingHeight] = useState("100vh");

    useEffect(() => {
        setLandingHeight(`calc(100vh - ${navbarRef.current.clientHeight}px)`);

        return () => {};
    }, [navbarRef]);

    return (
        <>
            <Navbar innerRef={navbarRef} />

            {/* Landing Page */}
            <Container>
                <Grid container>
                    <Grid
                        item
                        sm={6}
                        xs={12}
                        zeroMinWidth
                        style={{
                            height: landingHeight,
                            display: "grid",
                            placeItems: "center",
                        }}
                    >
                        <div>
                            <Typography
                                variant="h2"
                                style={{ marginBottom: "10px" }}
                            >
                                Learn Vocabulary
                            </Typography>
                            <Typography variant="h4" style={{ color: "gray" }}>
                                through fun and interactive quizzes
                            </Typography>
                            <Button
                                style={{
                                    backgroundColor: "rgb(43, 71, 139)",
                                    color: "#fff",
                                    marginTop: "10px",
                                    fontSize: "1.5em",
                                }}
                            >
                                Take a quiz
                            </Button>
                        </div>
                    </Grid>
                    <Hidden xsDown>
                        <Grid
                            item
                            sm={6}
                            zeroMinWidth
                            style={{
                                height: landingHeight,
                                display: "grid",
                                placeItems: "center",
                            }}
                        >
                            <Image
                                src="/image/landing.svg"
                                width={700}
                                height={600}
                                alt="landing image"
                            />
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </>
    );
}
