import app from './app';
import { syncDB } from "./models";

const PORT = process.env.PORT || 8000;

syncDB().then(() => {
    app.listen(PORT, function () {
        console.log(`Server is running at port ${PORT}.`);
    })
})