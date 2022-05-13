import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar =( {user})=> {
  return (
    <div className='navbar'>
        <span className="logo"><Link className="link" to="home">Twitter</Link>
        </span>
        {user ? (
        <ul className="list">
            <li className='listItem'>
                <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYYGBgaHB4eGhoZHB4aIR4cIxwcIR4cGRwhIS4lHB4rJCEeJzgmKy8xNTU1HiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrJSs0NDQxNDE0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAIEBQYBB//EADwQAAEDAgQDBgUDAwMDBQAAAAEAAhEDIQQSMUEFUWEGInGBkfATMqGx0ULB4RRS8SNiggdyojNjkrLS/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAIxEAAgICAwADAAMBAAAAAAAAAAECESExAxJBIlFhE3GhBP/aAAwDAQACEQMRAD8AxeOZ3geYU/hbg2m4+9EDjeEdRe1jr21UdryG5RoV6KMGsEim59SKbSTzKsaWC+Gcou4jfmrHsfw6xflknmmcRYW1Cc0GOlkA9DqVEsbLiBOw5o+HYWtJIknn+VFwjC3vvJJ/SD7+if8AFe+Se6PeiokAx5LzJ3/ypzH7BRsLRzuDGieZ2Vs2nk7oGZ2596BAYDUqLWAOeZOw96lNqPc8x9PyuCkYl5ujVa4AAYPP3qqMzgY1gkmSdP4/KjPcTcn+F15lcQH4hzRaff8AlPY9cY4aQiMp5jDQQPX6wJ9ErAFBKeGKcygwDvGI8+Xko9R40bMdf2+iLCgICRCULrWkpiOJMcWuBGoII8jZdc2P4XCgRqsP2qaGjO2XdN+vIKbW4xRcB/q5Z2aYP/Ii7T6fjEKK/C2JJJ5LF8EXlGn8j0dd2eY6s406ha0Xa68n+fyo/C+zlbE4io17g4U7ZzpeYyt5mD7iZ/DeG1qxysjuiXEmAtLwHhha9wDnMcyA/kRIOUzYze+yJy6xdPKBK/DD4ekzCYpwxDQ6nTdMag2sSOhMxzCou2nFqGJxBfQYWMDQJIy5jeTGw29ei23/AFIcyox+SmczJD3wBeQdtSL/AGXnPDuHUqlB7n1C2o2SGyIIi1tTJkWQraTf0VFJWWz+LVMRhqdB4Zkp5YfHehogAXgGN946lVX9X/TYhr8O8EgEEG4jQh0R+xt4Kvw1RzdSQ1AqtAJcHSiyksi4xiXVaz3vjM8yQ3TTYeSdwp9JriKwOUtgG9j4C/n9OULITfeV2s1TfppWKOVMoccuk2nltPWEKJunhnNHwRYHtziWbwpq9j0Ac23Vcpkg9VIxtIBxLJySYnl75oLWT4orIeDi0lJO/pH8klVP6C/02PafF/ELHEieXkoGGpS5o8JVSwlx313V3wSn/qtzTl3VozlhHo/D8S1lIMbcxss/imsa/PUd1g81aU+I5T3aRykQ1xH52VJxHhr3vJc5o8L/AETE2R8RxRpNh7/KJgKL628Mm528OpSw3CGNMvfP/iI+pUniHEyAKdMDLFi2/kP7fO6oRPwL6VIugzGu/rzP2Tn4succohQMJQaxgzxPL3qpArDRtkEse9xJXUxoRAqM3k5CNRol8hoki/8AK7XYGxroPPnGk3keSK2tlAyiErsaVbH0cK0xm9OfvkpBxTGtLW7dIn6zGv8ACjte51iLcxz2JPveLp5ovAgxExcDUcpE+nmpZQF7HONx9LabJUBfQzMRHMETfcWjrHJS6WYFzmnUQROxOhnUW67c1IwtJz35y2G6xudTEbAkG/psk5Ydgo2yrdTDHQ6SOhiROuhsjVqZBeALCRYaC8zzta97ndHxUNebB2veggggiO6TA1Gx89Ed73EAAhoBkSRaxJbAEakA9Dedl2eA6+FYGWk2H3PT8oZCtaOCY43fEWsZv/aCdIQ6ODY6pkzSJtH8aq092S00VoC65qt6HCA6sWZg0ROl/COahcSw3w6jmBwdG48N+qFNN16S4tZJPAuJ/ALu6CHAA7G06epsrnHdpqFMTTIe513Nbtb9R0B6LKVaJaLghaZuGoswYcKfzBpJtMu/U47D+Fjywj2TfppCUqozPGe1PxWvptow5wgO1bcRM7lYjBYP4TyDHeFp6La1cA12YtIls+YidVTYfhrKznSSHtPuOi0UUlgVsr28HaGkvAuqGlh2YeuxzwHNBNjexBAsbSJkdQFfcT4kAfhT0PigVWMyFh7zjoD4e/RDVjTaKXjbGPruNBuVroOUQLxew5lVz8OSASptfCvpkHSEbhwpueRVJaCNZi6VZNE8FLVYn0I3Cm4lrA1zGmSHGHcxKj4YEGcsgapVk0vAi+ZAEoeHplzoAvyVnTo/Ef3BFlFbmpPB3BRQk7wXFPAAgd53oUlbUeMUso7o9EleDG5EDj2Pp1Xt+C0BrdSpHZfDOfV5hVlfhr6QaXiC7ZaTsjRPxBBiySLbs3zqDSwAgSAvPu0T3h5DXGPFehuwpi5XmvapjhXhkmGlx6Aak8h+5CLopoZhcLAzPN/VGbjWyA0C26qBii4CT4p7KoiAnZFF+KLn3lFNNzIkpdmZcY8/wpPGAQ9otef2TF4OY2NbeKI/T378eVuYQ6EK0Pca3MSXawbwBIGXYb/+KG6IUQBY513a9baW8kSnQBJOwuY06yfD3z67M+S24ETFtdP8+HO/GNlun+bwTziTy1PmXgYd+KtYusAAZ+09c0mf2QXPcXFzpkzpzkSOkT9kd5cxjSHOvYAEjYzYbaaaob3yGggtvcga2i/Mx1G+kqRM7TBa0gz34iNTB0G+tvK2isOHPAY8uMlwA3NjIIkgk78xKBXflAa5+YQ6buIkNECD8pPPy1Fg0nkm9mmczgN/PoBbxhJrsik+rDPhxIAzkyGETrYuAEmRoQOvKyl0MQMoo/DvDWyTaXAQbjXfyUfBNZJeH3n5csyDz0EmBcHb0VfFAukAyb8z/tjWDEac42U1bofllqzs00EHNbMXZYImdpzaaX19Sj8OFGk2TDXH9Ri46HYLPYjEVXNOZzzIje2xnmDpvcKy4PiyAW1mg8gRJtzB9+qhwlTt3/QdleEBwrqVXEPzOEG7YNttNj9k/E8As6oxzQ0SWt5ga3239PIV+IoMfiG5wKbHTeRoDoXGwmw81qMa0im00wHsaQTBmQJ02N0Sk4tUxJWnaMbiHvcAXCw6KZiOD4g4eTUIYBmFM8he9ttYlWeBxeGxhc0DQ5XWcLjUEkCPNTO0TSGMa10DMJbPzNG3P/KqXI20qFGOGzB4XuZmuOZ50Onh0A/KDx3gj6BY99YQ+bs7vK19u8L9dlY8V4f8Yn4UMeBqZH0j3ZZl3BMU8F7zUeGOyEyXNF75ByvsN/JatsVUUNSlkxBeSXsB+b6Ta1l6P2H/AKJrH4mo5gfMAPI7jRplabucTPpA6xBw6KPwHsLHESM7CN7wDHM+qxLOFva9zPmDZuL+Y9PoplHsqvZV+nqHH8VgabG4kMbL7mAby3cbHa2/ivHuKV2VKj3sZla5xIHIe7q3cHvcym5znsmzZJAOggc7/VQsZw/4byLgDYj37KFHqqKUlshYXAtexxLocNApvD8W2mxzXtknou497WZXMvI9Pf5RMBhWV2vJdDxcDnr7sih23sgYbFFjnZNCo7O+7vbnVEZgXuzBoPdmQm4WmJvayVl0gzsRFguLnwwd0kBRqO2ddxqNYRGUKX2Dw+d73zpZUvaXGipiHEaaBaf/AKdMjOev7KkT6bhjDF1hO1nCnOcXgkWg9RIMHzAPkFvi6BqqPFPD3aSAnQSZ5S/DPaYP+VY8Lw7MwDzYrX4rggeS6FUYzhWRjjebwB7uk0EXbLvgbmzkaZDSYm8CNP3j8p2PpB1S+UAAmXGOWnM9L6+kHsQ0kOJOhUzi7mueMs2mbj8W/wAppYpCvNkNjnZyWRlEgHn1jXl5GCLqa0ki50FpnTpKFhnlugGu7Wn0kFGcSbGHHZwmYO3hobiR00RkybC4eoWjeNbbAwCRyMxfw1suMzEG+m0dQP30THMIsbTt4cxsfHmi6DWDtAA9+adeiO0nDra7QBMmNSZBAncbeqTcwzASOYEiOh981z4k+J1MyT5/t94U2hTqvs3LYSTLJAAgZ3a2A1PVS8bGlZGaSBJFrkW1MD6bx+U5psGCCeZFyZ0GuU+HNPqtoUy0VcVQZIJaC8H+28/LEEHVdOCLpNN7aoGuQ5jp/bYm3KUu0X6DjJeHGMJgN00JiIvN58/IG6l4NjWPzPvINiC4sJMS7Y7hQ6bnMk5iAev6tYduN76/dS8Li35hmBLJkho5QRcamIEdALECFK3Y40iXSzMe57qLspsHQLc7C0W2/EVjcaBWLntDWhxt6gHnB6RY+S0uJ4w0U8wEgiZ5TzBHl941WQwtJ9esIMAuJIBggRp/2m48r7KINu3JUVKvCd2z4nTq0msYJOYGeXhy/wA2Vb2d4w9jm0qz4w5mZgAHkTFmz5a7K14h2ec2H5mxIDhFwCQARtN/qFFd2YdULnMy5eTufQc972uNCq+HWrwS+3a2d47xHD0Dmw7qYJu6DmGawte5sPTxQODdo2vrtD+93ddYEiQASs5xLh4OYE/LMA9Pt/CkYXhtNlNpe6x0IMbag7eqpRpUwbbyjYcdNOu3LhnMFVpu5sti05XH8ofAOKvpUjTeG52Ek5jrN9RqTOv+FhT2lp0ab6dPM15JDXCNz8zzYzzkfRaHshwN2Lz1q1R2YZQS0wdNBEACI2UuMYx+Wirbf6E7Y8cp4hlNgLWnMSRmBc0gRePljl+FjcX8bD5SWODHiWOcDDhrIO+v1UztpwtmHruptcXCAb6gm9+sLnFO0tTE4enSe1kUyDmEy4hsCRtYlCpJKOgzdshcCr1HuLWCSLifXTki4trqlV3xgGkAC1tPEld4UHMeH07EDQiZ6EIXEcU6o8l4Ez9rLTwXpTfDjMItJymLEA7JlLOx4c3XZaTHY91WgxmQAUyJdPIRYRa32VaaYzNnRJotSIX9Q9ry7Qu1EJNoF7ZgWM+PRWOLosLu6ZBC7Twj2tzAWQFkT+n/APbPp/K6rinxMQLJIC2UnGWRiagiIcYWx7BVg0PGpn9gs72wogYp0bgfutT2Mw4bRe8alCKezUMoOc6XOtsESpRaNAsr2a4pUfiHMeZAmPVa+s6yaFIBTba6hYjChxMwrbLZVlX5yBr9kyFjRUUMFkLg0gAnM6Le9UIFnxA02bqTpJ5K9dQAhp+Y6qPxXhwyyBolQ9bK/FvaXdzQck1hjTz/AAm4elNk4tgwqxoylbyFa6NUbD0S8nvNED9RPoIBO/u0xgUSlrrHv6IaxgItWuxOwfDy55z91jBme6YGXmDv/BS4w9j2spNBbSZVBc0aPYKdQgP3cC9rdb6aEJ+Je59F1Bz3UySM7gJOQEZgDs4iwJtcWUU13GRljMZBiAQJkAxrf6Lmk3J5PQ4+KMW1sjYvs1hqzy97XEEBlJrSWBkS5zoBglxcDedOlo1Hgvwhnw5eypmc4uzOcHExJe0nvXFyb36K7o1wXAkCGC02m37k+iI/FG2eJAzh3924a7oR/lJNI0lw3odw/GjENcKuVlZgaHlpOVwdOUOMXnKbj5YjUK9wfC8rIDhmAIjlvB8+nqsxWrEsZnOYklxI1MWAnpDvWysuFY4tbVdmkuIIBv8AMXGyh9qwZy/51VkDiZqNBD4MOEt87aajT3pFwOHeHshxYJAJjTnb91a4Sr3xVeXuby1EQILrwSL3v9lLxvaLDUxJbfUDKJMXgAXJtYBbOckqo43FXsi9quH5abSKtRzswgOd3SYMGAAG3sLRJV1w+s2phw6mHNtuCDmGt4719xrdY7tfj6lbJFFzGgt/9QZM2vzCZa3bY38FFf2txOGYKT6eQFvcc9rgb/2zqBcXHXos3BuKXo00mQsTTp4qo1lNpDmkh2ZzrNAGrS2zpJGu3K4gcX4U/Dg53As5SZEnr+f4d2V461uJD3MJYCZcN50nne/iAtL2p4hQx1N1Noc1zL5nd2+ogfqGov18Vum00qx9kY9POeKYVhLXNFzp4LYdje0jqNPJlDoNwSRNhP0H0VFh2UyYeYLQRrod5I3n9+igOrNz2JHXSRtKbinspWantPX/AKuoKgZBDQ0NmbAm5O+qN2J4JQr/ABnVzAbAaJyxqS4npa2lzrtQUMW9lmmZtf8AhAa+owuyvc3MIdBiff7pOPxpYGv0sm4lrHODW5gZDSbSJME8p1Vc6nMzYzdFwtzfZSK9TMAI035p2FEQy0ZW6HVSa2GZkZlMvOo5c/qmBnREpsOad0BQF+FLHAalPrveWmbDl78VKxFQl0xomPpl+qBog0+GOIBy6pK1p8Qc0BoiySBlN2vM4px6D91sey1IjC+R99V59xTFZ3h5XonZapmwvkgPSs7LCMSfP7ra4qAROiwfBsR8PEF0EzMeq0zMUaj25rDYJoHosq1d0HKNEPBsyjO/5ijVHCzRAARWU83gNEyQNNhcS4+S7iHDKQphgKDjGyCUkDM+AMxA5pjRJQ3HvHxUrDDdUkZSlgfSwrnGPvMDqeXNXODwbAM7gHMYCSQDHduRMd6wOhI6XhZx/GqdN5zva0D/AGvdJ2Aa1t/UD9pON41OFxNSDlbTLWucdc4Ihsd3QOMgCIIvqs+VvSHxq9lDwTtKcS+ox+YvLnvbYnuZibkaROpgRG6vmSDIggbyJPUDU3Ov4KwnYSk4MxVa4AYynI0Je8OI9GGfEcwrhlRzLBxbtY9SdDbYbT6lRFNq0da5FHDNGamggC/hbmZsNtIFtAo1LiTHuIz/AClwbNu60kCDpEeeyoqmLraB4IJEkiHBpj5Ys4665UCrVY+s8M7rTlcGyLSADMad6T0t0Qo5yaPnpfE11J7TmOYEGZuIHdjXbRCoYoOc1guC8d46RpMDXfWPS6zbGOjW2u/9ov8AV3qVPwFT5wNYkdTIP3+pPgrUEYz55NYNHU4hUdmY1mVhBuP09APpPK/RTuDcGLnsrkNOQyM3gRa2v2t5Q8JWzQTo4A/mfMFa7COJpgtsInT7ct1PM3GOPTmg+0slAeIOrYxkUnGlSa/MYmHktidrQbdZVX2tx1LFVaOHDbB5Ly9sAabbi2hEHS6tuKcbNARRptcHbmw05DX6Lz3EdoDTqvc9md7yC7Lsb2E6NMi1730sJhx5uqrRXZ6HdpqD8BWaQ/4vxJdLrOB3mPpGnKwXcPj3Ykt+GMhsCdfWbKhr4hzy81MxJgtm8GdJP6cpPmGqXwRjwCWHLB1/HvmtVehNJ5JGL4Q+k/IGl73X7sunmVWGgCSHAhwMEGxB/ZbHhXEHteKj+84DKdrTtyuoHGmh9V9QtjOZ9AAgpFVg6Bi2o0Vh8AlneEu5ouEphrCUWjmNp192QOrImGw4LgNt1LxPDw1uYGQSpD+H5IcLhGgGCRZA0V9PCkCcs+WyG6nBVnWrkGBoR7IQsXSbYt0jrqkWiI5lpmUx9SYgQiObZJ+HgC/zIFSIuRJSv6I9Ek8ioyHGMOWVHs5OMeC0/ZDi5FJzCLDdUPGqofWe8aEqFg8U6mSNikM2nCHtFfM7QgkJ9XGl2I/0zYanZZ12KMB3vzRMNjnMOaLHVMTdno2EfFyb+P25Kzp4hsLzirxlxgMlXOBx5e0wbj3dDYRjZrPihxmVB4jXtYqixPFslPXve/2VS/jDnXMIEyyf8xlScMbFZ13EyAeaGzjb27TK0TVmMotkLj5/129wvuO6NXXHdbAMk6aFXnavEmlgCwFgPxAHNEFufK7O2DZwAIA27ttYCwNId3E5MzzIoTqXwZeGjRrTABmXEyAMt4fHOFGtjcPgXCGMY6pWykhrC4l73OO2VuRoE6lonnhySTdo244uMchOEYX4OBoMsHVSa7/+QDaY8MrQY/3nwTHkcrftB165R9eqtMZW+NUe4ZWNAhuYhoaxoIaANSYBGUbhVo6+m+otyn5RysVcFSoTduwVWTYCSTYAak7Ac7gevVD43w7JVpFoy9y5me9mcSSTrBI15hWXB2Nzl7jAZ8vV2x9JM83KbxtjHsDgZLD6gkD1kBJ7o1jF9XIo6D8wiYI8oiRPrH1UnD910iYGx+oPLcet/mIgOoO2EwIN+Zv4b+9CsNQm4AFpMyTpNhpPjueapGMqNdwx/cLf7XfQj6afdTm497WmmXENItbUf/nwWZr8QNGm0jdwEm1oceul1Cpdp3A5S2xve4JjXpz62Tkk1TMoxd2aLH40gtETfTaeqr8Rg2veXfCY0uIL3QSbaBk/IJuYuecWFVU4q6zrXJgTcRFz6/Ta0zsBxB7nC3gpaXpXVneI8LY0hzh3YiCPqo+EyteWtEMJt797LRY6g54AeI6aHzQ/6AZmtt71RaKiiHV4aRBb8pRcVTblAA8VsHUsPTY7NDjl0ME+XKVlajMzTCSndlqJWlskBOqYQtv9kc0RE7pPeTCCqH4SuGnv3Hqj1MWwsLQ3w0VflMpA8kDo4T6pVHGISeCmFA6FTdAI5poEa3Ce9oGiE90oJSFn93SSlJA6MeGXPj+V3E0AMpXS6HQnYmuCAOSZHoWq3uAG0hF4S8OBpP8AX3uolV+YNurDC0qWQuJ7/j+yTLRytSyOLW3+qs+F4QtBc8kDx+6pGYh2aOv7q0xvGLNZHih2CaWRvFHF8BkukwN5UB7Hss4QeqtGcRDMrss6fZcxfEWVIdF+Xkn6KlX6VTGOfYKxpcHIYHlwItmHTohHECbCFa4Lh/ca6tWFJj7tBzFzxe4a0d1m0yN4SYotemh7K1TUe6u9kNYCygMskgTJkC4EjS0udvKgvxrH1OIvaxxf8cUnVBMCm0NygEWu5jpHKJsQtFgsPlwzXU3seGNhmWWgvcAGuc0j9MkhugEQDZZarhzhqLcOCc+Y1Kzt3VHgy0n9Qa05etzusYq5FSpRKxwOmoGo0O3ry9VyppvP78/WT5BFdSmCAgYqqGMc8yWtGnU2A87evRdJiDwAzkkGBJiNCp2Io5RuZkfRUXZvFyTteY23VzjqxMdDfwGoWXp138KQNjd/p7297J2KBa21jMTy5nx9xzkNpA9fwpFSgX3jmfXXw8NlqcrKzFYZz6BaCcze+P8AdAIcD5EnxCpsNh3vibkWaBcmTMCNpJW3w2EII6e5v4KXhey7nhxpZMpJ7pMZSdYEWG3UfSZNJWxx3RiqWHk3C1/ZfCOY9tXKC1pOvgbjrf6KRU7MOpm5Y49HNn0MEouDr5TlNgNRH3/Cm1IvrRZ8YcKrg4WAH8/uoeEAz35IeOxmYw3T7oNOqGiTqmoqOEFPZNxRYJJUbuRMKFVqSka5jKgaiztWDsgCmSbI4cE6pVaB3ff5QNogvZCFaVJIkqO4QgTY51S0QhpqdmSGmKuyInVMdTI210Ty7zRa+ILwAdkxsiJLsriAoyTX53ZtkCu6E/DMgQg4lifhktjXvgLtOuIBlMyyAE8YXRLJTCurSbFFBbqTdSaGBbEkLowjTNk8k4AVa0gAmy4YiQbqTWwgMBHw/D2oAm9juHtxWIYx05buf/2tuR52HmvSO0D3scxrPhtY4AXaJAkAT+wCzv8A09w7W4lxFiabgP8A5MKuKuevWLQ6Nb2JA6bt2v8AmDjLM86SG9Y9DOrPymq4NbRpgFjG2Dn/AKZiARJuBy6rG1nlzi43JJJ6k3srXjWOe6o9hccjHFrW7ANOX1t6/Sta1accKVkydsDTb79+ShcWZ/pvG2R//wBTCtWt/wAe/dlW8Zf3Mu77eViT4aDzWgqMvwlxY7oVoMbU/wBMxq6yqqdDdWlChLROxUUapsn8AOamGn5mW8RsfoR5BX9Gl09j6qi4dSyPadNj4E7/AEWmpqrJcaOspDdTaFVzQQ2ZI0G/SyjkrtN0FJq0IcxknvAnof4/jyTMfSFn6E2PlofS3/HqiilqRpy5Tt75IWPMtaJ3n00+6Ggi8kAwmOaDuiPpWTBTCCxpaE0tHNJ7FwMSGh4ATS0JZbIcIKHkDmhVQE5oumPagmgRaJXHALsLmW6BDCAu7LrmhdDbIGCyrqJCSAMVTfCBiCn0W3KbiWp+GXoqVNSXDRBwo0Up40Qh+kym7uptI6pMNkqRVCHVNQplFRXi6l0mqQLvszicmJpmbF2Q/wDK33P0W4xoZh6b8h77mkg76hsz0Lh9V5th3lrg4atII8QZC1nHsVnqAycr6IjpLs4+oAWU49pr/Rp0in4pDqrnA5gcpnmS1pP1lBaz3792SaZKMxi2SpUKhjwGgk6AEm2wus7iHmo8uIgfpHIXhaPHN7jhzEetlTspgJNjjG8gaWH5qZTYAmhqM1Saoe0K6w1SWg++v1VQwC6n4B+o84QgkrLJq6EJrkRXZk0Fw9RzXONiCACD4gQff2QMY/vkDa37ozNFBqPlxPUoaQR2debIbSnPNkxqRVHHpq69NBQCHPUclGeUEpFJiaVwrgKQQKxiYDdPXWsTAG5OAQTMqQEhjUl1JOhWYSlqliWruHbdGxVOQgh7G4YWUghBw+gR27ID0Plt5LtBq7FkWiyAgRyLqVSag5LqZTagY9jVpK1PNhaDxctzMPk5xaD1ifetAxqueFuJY9hJ7oztHWWhwjwg+Xipl4xkJrVJYLJpLfDyXH1o0uqsrqiPxJ9svmfr78lWwplVkkk66oIppDSwca2ycF0thNiyQBWORGOIMjUIbCpNBklA7JzHyJ9+Ck07quZIcY9wrDDPVIlixTy0ADdRAi4x8ugbW/KBKCVgc4rjSuONkmFBRx6TFx5XWoJY15QiU95QnIBMSbsukpkoZQkVuiBKKw2QSBqapweNE2oVws3QUESQ5SQTRjcLqj4gWldSQJ7B0ApDRcJJIAlI9LRJJABGtkqaxoSSQPwMwKx4Mf8AUDdnNe31Y6PrCSSUtDGkCU1jUkk2NAXMTXMgzzXEkmUjr2CEF4skkhiEAp+EbF/dkkk0J6O4fUKbSAlJJNEMgl0mV2UkkijjnJNKSSGCGOKew2SSQMG4phSSQIG4piSSAQ0ojDZJJAEau66k7JJIQ3oblSSSQQf/2Q==' alt='' className='avatar'/>
            </li>
            <li className='listItem'>
                Sucharitharao
            </li>
            <li className='listItem'>
                Logout
            </li>
        </ul>
        )
         : (<Link className="link" to="/">Login</Link>)}
    </div>
  );
}

export default Navbar;