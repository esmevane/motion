import { motion, AnimateSharedLayout } from "@framer"
import * as React from "react"

export const App = () => {
    /**
     * TODO Needs batching
     */
    return (
        <motion.div
            id="parent"
            layout
            style={{ ...b, x: 400 }}
            transition={{ duration: 0.15, ease: () => 0.5 }}
            _applyTransforms
        >
            <motion.div layout>
                <motion.div layout>
                    <motion.div layout>
                        <motion.div layout>
                            <Box />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

function Box() {
    const [count, setCount] = React.useState(0)

    return (
        <motion.div
            id="child"
            layout
            style={a}
            onClick={() => {
                setCount(count + 1)
            }}
        />
    )
}

const box = {
    position: "absolute",
    background: "#dd1144",
    borderRadius: 10,
}

const a = {
    ...box,
    width: 100,
    height: 200,
    top: 50,
    left: 50,
    background: "#282828",
}

const b = {
    ...box,
    top: 20,
    left: 20,
    width: 300,
    height: 300,
    borderRadius: 20,
}