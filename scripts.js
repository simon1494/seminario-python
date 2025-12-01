// Inicialización de Supabase
const supabase = window.supabase.createClient(
  "https://hnzkkdmcebqrxhvvlpna.supabase.co",
  "sb_publishable_wiEIlajr8ee0K92etorzsQ_lUn-eyV1"
);

// Función para insertar datos
async function guardarDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    const { data, error } = await supabase
        .from("contacto")
        .insert([
            { nombre, apellido, correo, telefono }
        ]);

    if (error) {
        UIkit.notification({
            message: "❌ Error al enviar los datos",
            status: "danger",
            pos: "top-center"
        });
        console.error(error);
        return;
    }

    UIkit.notification({
        message: "✔ Datos enviados correctamente",
        status: "success",
        pos: "top-center"
    });

    document.getElementById("form-contacto").reset();
}
