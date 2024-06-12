// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
use tauri::{CustomMenuItem, Menu, MenuItem, Submenu};

fn main() {

  let save_as_image = CustomMenuItem::new("save_as_image".to_string(), "Save As Image...");
  let about_ernell = CustomMenuItem::new("about_ernell".to_string(), "About Ernell");
  let quit = CustomMenuItem::new("quit".to_string(), "Quit");

  let submenu = Submenu::new("File", Menu::new().add_item(save_as_image).add_item(quit));
  let about_submenu = Submenu::new("Help", Menu::new().add_item(about_ernell));

  let menu = Menu::new()
  .add_submenu(submenu).add_submenu(about_submenu);
  tauri::Builder::default()
    .menu(menu)
    .on_menu_event(|event| {
      match event.menu_item_id() {
        "quit" => {
          std::process::exit(0);
        }
        "close" => {
          event.window().close().unwrap();
        }
        _ => {}
      }})
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}