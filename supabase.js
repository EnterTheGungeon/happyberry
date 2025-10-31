// supabase.js

const supabaseUrl = "https://jxvmswjyzbauzehqjfke.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4dm1zd2p5emJhdXplaHFqZmtlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2MDIyMzQsImV4cCI6MjA3NzE3ODIzNH0.lJM4bsYAxEX7vQOevLg3YCfSK39JwRyUOxdIrB7GpCk"
const { createClient } = supabase;
const supabaseClient = createClient(supabaseUrl, supabaseKey);

// Отображение результатов при загрузке страницы
displayResults();

async function saveDataToSupabase(
  sum,
  hours,
  result,
  com,
  additionalValue,
  hourlySalary,
  additionalResult,
  additionalBrut,
  additionalNalog
) {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  const { data, error } = await supabaseClient.from("happyberry").upsert([
    {
      sum,
      hours,
      result,
      com,
      hourlySalary,
      additionalValue,
      date: formattedDate,
      ADtotal: additionalResult,
      ADbrut: additionalBrut,
      ADnalog: additionalNalog,
      bigtotal: hourlySalary + additionalNalog,
    },
  ]);

  if (error) {
    console.error("Error saving data to Supabase:", error.message);
    alert("An error occurred while saving data to the database.");
  } else {
    // Дополнительные действия при успешном сохранении данных
  }
}
