﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.EshheLegche
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Сотрудники.
    /// </summary>
    // *** Start programmer edit section *** (Сотрудники CustomAttributes)

    // *** End programmer edit section *** (Сотрудники CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("СотрудникиE", new string[] {
            "КодСотрудники as \'Код сотрудники\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование должности\'"}, Hidden=new string[] {
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("СотрудникиE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("СотрудникиL", new string[] {
            "КодСотрудники as \'Код сотрудники\'",
            "Фамилия as \'Фамилия\'",
            "Имя as \'Имя\'",
            "Отчество as \'Отчество\'",
            "Должность.Наименование as \'Наименование должности\'"})]
    public class Сотрудники : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодСотрудники;
        
        private string fФамилия;
        
        private string fИмя;
        
        private string fОтчество;
        
        private IIS.EshheLegche.Должность fДолжность;
        
        // *** Start programmer edit section *** (Сотрудники CustomMembers)

        // *** End programmer edit section *** (Сотрудники CustomMembers)

        
        /// <summary>
        /// Имя.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Имя CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Имя CustomAttributes)
        [StrLen(255)]
        public virtual string Имя
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Get start)

                // *** End programmer edit section *** (Сотрудники.Имя Get start)
                string result = this.fИмя;
                // *** Start programmer edit section *** (Сотрудники.Имя Get end)

                // *** End programmer edit section *** (Сотрудники.Имя Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Имя Set start)

                // *** End programmer edit section *** (Сотрудники.Имя Set start)
                this.fИмя = value;
                // *** Start programmer edit section *** (Сотрудники.Имя Set end)

                // *** End programmer edit section *** (Сотрудники.Имя Set end)
            }
        }
        
        /// <summary>
        /// КодСотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.КодСотрудники CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.КодСотрудники CustomAttributes)
        public virtual int КодСотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.КодСотрудники Get start)

                // *** End programmer edit section *** (Сотрудники.КодСотрудники Get start)
                int result = this.fКодСотрудники;
                // *** Start programmer edit section *** (Сотрудники.КодСотрудники Get end)

                // *** End programmer edit section *** (Сотрудники.КодСотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.КодСотрудники Set start)

                // *** End programmer edit section *** (Сотрудники.КодСотрудники Set start)
                this.fКодСотрудники = value;
                // *** Start programmer edit section *** (Сотрудники.КодСотрудники Set end)

                // *** End programmer edit section *** (Сотрудники.КодСотрудники Set end)
            }
        }
        
        /// <summary>
        /// Отчество.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Отчество CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Отчество CustomAttributes)
        [StrLen(255)]
        public virtual string Отчество
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Get start)

                // *** End programmer edit section *** (Сотрудники.Отчество Get start)
                string result = this.fОтчество;
                // *** Start programmer edit section *** (Сотрудники.Отчество Get end)

                // *** End programmer edit section *** (Сотрудники.Отчество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Отчество Set start)

                // *** End programmer edit section *** (Сотрудники.Отчество Set start)
                this.fОтчество = value;
                // *** Start programmer edit section *** (Сотрудники.Отчество Set end)

                // *** End programmer edit section *** (Сотрудники.Отчество Set end)
            }
        }
        
        /// <summary>
        /// Фамилия.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Фамилия CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Фамилия CustomAttributes)
        [StrLen(255)]
        public virtual string Фамилия
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get start)
                string result = this.fФамилия;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Get end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set start)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set start)
                this.fФамилия = value;
                // *** Start programmer edit section *** (Сотрудники.Фамилия Set end)

                // *** End programmer edit section *** (Сотрудники.Фамилия Set end)
            }
        }
        
        /// <summary>
        /// Сотрудники.
        /// </summary>
        // *** Start programmer edit section *** (Сотрудники.Должность CustomAttributes)

        // *** End programmer edit section *** (Сотрудники.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.EshheLegche.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Get start)

                // *** End programmer edit section *** (Сотрудники.Должность Get start)
                IIS.EshheLegche.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (Сотрудники.Должность Get end)

                // *** End programmer edit section *** (Сотрудники.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Сотрудники.Должность Set start)

                // *** End programmer edit section *** (Сотрудники.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (Сотрудники.Должность Set end)

                // *** End programmer edit section *** (Сотрудники.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "СотрудникиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиE", typeof(IIS.EshheLegche.Сотрудники));
                }
            }
            
            /// <summary>
            /// "СотрудникиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View СотрудникиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("СотрудникиL", typeof(IIS.EshheLegche.Сотрудники));
                }
            }
        }
    }
}
