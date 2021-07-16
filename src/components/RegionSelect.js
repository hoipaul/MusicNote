import '../components/RegionSelect.css';

export default function RegionSelect() {

    return (
        <form className="region-form">
            <label htmlFor="choose-region">Stel hier je land in:</label>
            <select name="country" id="country">
                <option defaultValue="Holland" selected>Nederland</option>
                <option defaultValue="Belgium">Belgi&#235;</option>
                <option defaultValue="Germany">Duitsland</option>
                <option defaultValue="France">Frankrijk</option>
                <option defaultValue="Italy">Itali&#235;</option>
                <option defaultValue="UK">Verenigd Koninkrijk</option>
            </select>
        </form>
    )
};