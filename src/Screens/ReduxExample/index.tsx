import { useSelector, useDispatch } from "react-redux";
import NavbarComponent from "../../Components/Navbar";
import { decrement, increment } from "../../Redux/Slice/counterSlice";
import { getReduxExampleStyles } from "./style";


function Redux() {
    const count = useSelector((state: any) => state.counter.value);
    const dispatch = useDispatch();

    const theme = useSelector((state: any) => state.counter.theme);
    const styles = getReduxExampleStyles(theme)

    return (
        <>
            <NavbarComponent />
            <div style={styles.container as React.CSSProperties}>
            <h1 style={styles.mainTitle}>Redux Counter</h1>
                <div style={styles.card}>
                    <p style={styles.text}>
                        This is a simple example of Redux state management with counter actions.
                    </p>

                    <div style={styles.counterValue}>
                        <h2 style={styles.count}>{count}</h2>
                    </div>

                    <div>
                        <button style={styles.button} onClick={() => dispatch(decrement())} >
                            Decrement
                        </button>
                        <button style={styles.button} onClick={() => dispatch(increment())}>
                            Increment
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Redux;