import {Link, useRouteError} from "react-router-dom";
import {Button, Result} from "antd";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <>
            <div id={"error-page"}>
                {/*<h1>Ooops!</h1>*/}
                {/*<p>Sorry, an unexpected error has occured</p>*/}
                {/*<p>*/}
                {/*    <i>{error.statusText || error.message}</i>*/}
                {/*</p>*/}
                {/*<div>*/}
                {/*    <Link to={"/"}>*/}
                {/*        <span>Back to Homepage</span>*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <Result
                    status={"403"}
                    title={"Oops!"}
                    subTitle={"Sorry, you are not authorized to access this page."}
                    extra={
                    <Button type={"primary"}>
                        <Link to={"/"}>
                            <span>Back to Homepage</span>
                        </Link>
                    </Button>
                    }
                />
            </div>
        </>
    )
}