
export class FormUtils {

    static getDataNotNullOrUndefined = (formElement: HTMLFormElement | EventTarget): any => {
            
        // @ts-ignore
        const formData:HTMLFormElement = new FormData(formElement);
        const dataNotNullOrUndefined = {};

        for(const datum of formData.entries()) {
            if(datum[1]) {
                const key = datum[0];
                const value = datum[1];
                // @ts-ignore
                dataNotNullOrUndefined[key] = value;
            }
        }
        
        return dataNotNullOrUndefined;
    }
}
