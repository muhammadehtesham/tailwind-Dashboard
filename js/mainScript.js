
import './chart'

        // show hide sidebar    
        document.addEventListener("DOMContentLoaded", function () {
            const sidebarToggle = document.getElementById("sidebarToggle");
            const closeSidebarIcon = document.querySelector("#sideBar_header .fa-solid.fa-arrow-left");
            const sidebar = document.getElementById("sideBar");

            sidebarToggle.addEventListener("click", function () {
                sidebar.classList.toggle("w-[17rem]"); // Toggle the width to show/hide sidebar
            });

            closeSidebarIcon.addEventListener("click", function () {
                sidebar.classList.remove("w-[17rem]"); // Remove the sidebar width to hide sidebar
            });
        });


        // dropdown 

        document.addEventListener('DOMContentLoaded', function () {
            const dropdownItems = document.querySelectorAll('.dropdown');

            dropdownItems.forEach(item => {
                item.addEventListener('click', function (event) {
                    event.preventDefault();
                    const dropdownMenu = item.nextElementSibling;

                    // Toggle the visibility of the dropdown menu
                    dropdownMenu.classList.toggle('hidden');

                    // Toggle rotation class of the arrow icon
                    const arrowIcon = item.querySelector('.rotate_arrow');
                    if (arrowIcon.classList.contains('-rotate-90')) {
                        arrowIcon.classList.remove('-rotate-90');
                    } else {
                        arrowIcon.classList.add('-rotate-90');
                    }
                });
            });
        });



         // to do 
         document.querySelectorAll('.myCheckbox').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const label = this.nextElementSibling; // Assuming the label immediately follows the checkbox
                if (this.checked) {
                    label.classList.add('line-through');
                } else {
                    label.classList.remove('line-through');
                }
            });
        });