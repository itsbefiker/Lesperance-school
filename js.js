function toggleSidebar() {
    const sidebar = document.getElementById("sidebarRight");
    if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
    } else {
      sidebar.style.width = "250px";
    }
  }
  
  function closeSidebar() {
    document.getElementById("sidebarRight").style.width = "0";
  }
  