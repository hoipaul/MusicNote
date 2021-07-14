import {useForm} from "react-hook-form";
import '../components/RegionSelect.css';

export default function RegionSelect() {

    return (

        <form className="region-form">
            <label htmlFor="choose-region">Stel hier je land in:</label>
            <select name="country" id="country">
                <option value="Holland" selected>Nederland</option>
                <option value="Belgium">Belgi&#235;</option>
                <option value="Germany">Duitsland</option>
                <option value="France">Frankrijk</option>
                <option value="Italy">Itali&#235;</option>
                <option value="UK">Verenigd Koninkrijk</option>
            </select>
        </form>
    )
};