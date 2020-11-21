const select = document.querySelector("select");
            const para = document.querySelector('p');
            select.addEventListener('change', function setContent() {
            const choice = select.value;
            if (choice === "ingredient") {
                para.textContent = document.getElementById('h1').innerHTML= "svhbdfnjv\n dgfvdbdfbdf \n ssvhjvndf";
                para.textContent = document.getElementById('h1').innerHTML= "svhbdfnjv\n dgfvdvfdxvdfbdfbdf\nssvhvdfvdfjvndfmmmmmmmm";
                // document.write("1/4 cup Milk<br>150 g Butter<br>150 g Powdered Sugar<br>3 Eggs<br>125 g Maida ( Flour)<br>3-4 tbsp (25 g) Cocoa Powder<br>1.5 tsp Baking Powder<br>1 tsp Vanilla Essence<br>1/4 tin (100 g) Sweetened Condensed Milk<br>50 g Butter");
                // para.textContent = "1/4 cup Milk \r\n 150 g Butter \r\n 150 g Powdered Sugar \r\n 3 Eggs \n 125 g Maida ( Flour) \r\n 3-4 tbsp (25 g) Cocoa Powder \r\n 1.5 tsp Baking Powder \r\n 1 tsp Vanilla Essence \r\n 1/4 tin (100 g) Sweetened Condensed Milk \r\n 50 g Butter"
            }else if (choice === "recipie"){
                document.write("Preheat oven to 180⁰ C.  Lightly grease an 8” diameter baking tin and dust with flour.<br>Sieve together maida, cocoa powder and baking powder. Keep aside.<br>Soften butter in a bowl, add powdered sugar and beat well to a creamy consistency. Add Vanilla essence and mix. Slowly beat in the eggs one by one, then fold in the sieved maida mixture and mix well.  Add Milk and mix to get a dropping consistency.<br>Pour the batter into the prepared baking tin and bake in the preheated oven for 40 -45 minutes or till tooth pick inserted in the center of the cake comes out clean.<br>Remove from oven, cool for a while. Turn out over a wire rack or plate.<br>For Fudge Icing: Mix together Sweetened Condensed Milk, cocoa powder and butter and beat well. Microwave for 20 seconds, mix well.<br>Spread over the cooled cake and leave to set. Slice and serve");
            }else {
                document.write("");
            }
        });