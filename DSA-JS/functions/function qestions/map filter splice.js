function ekzadarg(...nums) {
  nums.forEach((n, index) => {
    // nums[index] = n * 2;
    console.log(n);
  });


  //   console.log(nums);mutable change


  // ***** for of

  //   for (const n of nums) {
  //     console.log(n);
  //   }

  //  **** for in 

  //   for (const n in nums) {
  //     console.log(`${n}: ${nums[n] * 2}`);
  //   }




  // mutate: change
  // kisi array mai kar sakte kisi varibale kisi object

  // mutable:changes will happen in original one

  // immutable:
  // when we want certain changes no to make that change in original one

  //   kiske perspective?
  // changes ho === mutable hona
  // changes na ho === immutable hona

  // forEach, for in, for of, for loop apne ap mai immutable hai isiliye inme khudse

  // mutable karna padhta hai

  // map hai wo khud me mutable hai khudse hi changes karke de dega
  // ab yeh chhate hai original array mai changes na ho matlab tum original array ki
  // immutability ko bhi save rakhna chhate ho in that case map khude ek array bannake return karta hai

  //   const double = nums.map(
  //     (n, index) => n * 2
  //     // console.log(n);
  //   );
 
  //   console.log(double);
  //   console.log(nums);

  //   const evennums = nums.filter((num) => num % 2 == 0);
  //   console.log(nums);
  //   console.log(evennums);

    // const slicednum = nums.slice(1, 3);
    // console.log(slicednum);
    // console.log(nums);

//   const splicednum = nums.splice(1, 3);
//   console.log(splicednum);
//   console.log(nums);

}
ekzadarg(2, 3, 4, 5, 6, 7, 8, 9);