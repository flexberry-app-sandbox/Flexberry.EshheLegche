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
    /// Вольер.
    /// </summary>
    // *** Start programmer edit section *** (Вольер CustomAttributes)

    // *** End programmer edit section *** (Вольер CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ВольерE", new string[] {
            "Номер as \'Номер\'",
            "ТипВольера as \'Тип вольера\'",
            "Площадь as \'Площадь\'",
            "Сотрудники as \'Сотрудники\'",
            "Сотрудники.Фамилия as \'Ответственный\'"}, Hidden=new string[] {
            "Сотрудники.Фамилия"})]
    [AssociatedDetailViewAttribute("ВольерE", "СоставВольера", "СоставВольераE", true, "", "Состав вольера", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ВольерE", "Сотрудники", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Фамилия")]
    [View("ВольерL", new string[] {
            "Номер as \'Номер\'",
            "ТипВольера as \'Тип вольера\'",
            "Площадь as \'Площадь\'",
            "Сотрудники.Фамилия as \'Ответственный\'"})]
    public class Вольер : ICSSoft.STORMNET.DataObject
    {
        
        private int fНомер;
        
        private IIS.EshheLegche.ТипВольера fТипВольера;
        
        private string fПлощадь;
        
        private IIS.EshheLegche.Сотрудники fСотрудники;
        
        private IIS.EshheLegche.DetailArrayOfСоставВольера fСоставВольера;
        
        // *** Start programmer edit section *** (Вольер CustomMembers)

        // *** End programmer edit section *** (Вольер CustomMembers)

        
        /// <summary>
        /// Номер.
        /// </summary>
        // *** Start programmer edit section *** (Вольер.Номер CustomAttributes)

        // *** End programmer edit section *** (Вольер.Номер CustomAttributes)
        public virtual int Номер
        {
            get
            {
                // *** Start programmer edit section *** (Вольер.Номер Get start)

                // *** End programmer edit section *** (Вольер.Номер Get start)
                int result = this.fНомер;
                // *** Start programmer edit section *** (Вольер.Номер Get end)

                // *** End programmer edit section *** (Вольер.Номер Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Вольер.Номер Set start)

                // *** End programmer edit section *** (Вольер.Номер Set start)
                this.fНомер = value;
                // *** Start programmer edit section *** (Вольер.Номер Set end)

                // *** End programmer edit section *** (Вольер.Номер Set end)
            }
        }
        
        /// <summary>
        /// Площадь.
        /// </summary>
        // *** Start programmer edit section *** (Вольер.Площадь CustomAttributes)

        // *** End programmer edit section *** (Вольер.Площадь CustomAttributes)
        [StrLen(255)]
        public virtual string Площадь
        {
            get
            {
                // *** Start programmer edit section *** (Вольер.Площадь Get start)

                // *** End programmer edit section *** (Вольер.Площадь Get start)
                string result = this.fПлощадь;
                // *** Start programmer edit section *** (Вольер.Площадь Get end)

                // *** End programmer edit section *** (Вольер.Площадь Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Вольер.Площадь Set start)

                // *** End programmer edit section *** (Вольер.Площадь Set start)
                this.fПлощадь = value;
                // *** Start programmer edit section *** (Вольер.Площадь Set end)

                // *** End programmer edit section *** (Вольер.Площадь Set end)
            }
        }
        
        /// <summary>
        /// ТипВольера.
        /// </summary>
        // *** Start programmer edit section *** (Вольер.ТипВольера CustomAttributes)

        // *** End programmer edit section *** (Вольер.ТипВольера CustomAttributes)
        public virtual IIS.EshheLegche.ТипВольера ТипВольера
        {
            get
            {
                // *** Start programmer edit section *** (Вольер.ТипВольера Get start)

                // *** End programmer edit section *** (Вольер.ТипВольера Get start)
                IIS.EshheLegche.ТипВольера result = this.fТипВольера;
                // *** Start programmer edit section *** (Вольер.ТипВольера Get end)

                // *** End programmer edit section *** (Вольер.ТипВольера Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Вольер.ТипВольера Set start)

                // *** End programmer edit section *** (Вольер.ТипВольера Set start)
                this.fТипВольера = value;
                // *** Start programmer edit section *** (Вольер.ТипВольера Set end)

                // *** End programmer edit section *** (Вольер.ТипВольера Set end)
            }
        }
        
        /// <summary>
        /// Вольер.
        /// </summary>
        // *** Start programmer edit section *** (Вольер.Сотрудники CustomAttributes)

        // *** End programmer edit section *** (Вольер.Сотрудники CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудники"})]
        [NotNull()]
        public virtual IIS.EshheLegche.Сотрудники Сотрудники
        {
            get
            {
                // *** Start programmer edit section *** (Вольер.Сотрудники Get start)

                // *** End programmer edit section *** (Вольер.Сотрудники Get start)
                IIS.EshheLegche.Сотрудники result = this.fСотрудники;
                // *** Start programmer edit section *** (Вольер.Сотрудники Get end)

                // *** End programmer edit section *** (Вольер.Сотрудники Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Вольер.Сотрудники Set start)

                // *** End programmer edit section *** (Вольер.Сотрудники Set start)
                this.fСотрудники = value;
                // *** Start programmer edit section *** (Вольер.Сотрудники Set end)

                // *** End programmer edit section *** (Вольер.Сотрудники Set end)
            }
        }
        
        /// <summary>
        /// Вольер.
        /// </summary>
        // *** Start programmer edit section *** (Вольер.СоставВольера CustomAttributes)

        // *** End programmer edit section *** (Вольер.СоставВольера CustomAttributes)
        public virtual IIS.EshheLegche.DetailArrayOfСоставВольера СоставВольера
        {
            get
            {
                // *** Start programmer edit section *** (Вольер.СоставВольера Get start)

                // *** End programmer edit section *** (Вольер.СоставВольера Get start)
                if ((this.fСоставВольера == null))
                {
                    this.fСоставВольера = new IIS.EshheLegche.DetailArrayOfСоставВольера(this);
                }
                IIS.EshheLegche.DetailArrayOfСоставВольера result = this.fСоставВольера;
                // *** Start programmer edit section *** (Вольер.СоставВольера Get end)

                // *** End programmer edit section *** (Вольер.СоставВольера Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Вольер.СоставВольера Set start)

                // *** End programmer edit section *** (Вольер.СоставВольера Set start)
                this.fСоставВольера = value;
                // *** Start programmer edit section *** (Вольер.СоставВольера Set end)

                // *** End programmer edit section *** (Вольер.СоставВольера Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ВольерE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВольерE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВольерE", typeof(IIS.EshheLegche.Вольер));
                }
            }
            
            /// <summary>
            /// "ВольерL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ВольерL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ВольерL", typeof(IIS.EshheLegche.Вольер));
                }
            }
        }
    }
}
