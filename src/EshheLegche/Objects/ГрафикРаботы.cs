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
    /// График работы.
    /// </summary>
    // *** Start programmer edit section *** (ГрафикРаботы CustomAttributes)

    // *** End programmer edit section *** (ГрафикРаботы CustomAttributes)
    [AutoAltered()]
    [Caption("График работы")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ГрафикРаботыE", new string[] {
            "ВремяНачала as \'Время начала\'",
            "ВремяОкончания as \'Время окончания\'",
            "Должность as \'Должность\'",
            "Должность.Наименование as \'Наименование должности\'"}, Hidden=new string[] {
            "Должность.Наименование"})]
    [MasterViewDefineAttribute("ГрафикРаботыE", "Должность", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ГрафикРаботыL", new string[] {
            "ВремяНачала as \'Время начала\'",
            "ВремяОкончания as \'Время окончания\'",
            "Должность.Наименование as \'Наименование должности\'"})]
    public class ГрафикРаботы : ICSSoft.STORMNET.DataObject
    {
        
        private string fВремяНачала;
        
        private string fВремяОкончания;
        
        private IIS.EshheLegche.Должность fДолжность;
        
        // *** Start programmer edit section *** (ГрафикРаботы CustomMembers)

        // *** End programmer edit section *** (ГрафикРаботы CustomMembers)

        
        /// <summary>
        /// ВремяНачала.
        /// </summary>
        // *** Start programmer edit section *** (ГрафикРаботы.ВремяНачала CustomAttributes)

        // *** End programmer edit section *** (ГрафикРаботы.ВремяНачала CustomAttributes)
        [StrLen(255)]
        public virtual string ВремяНачала
        {
            get
            {
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяНачала Get start)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяНачала Get start)
                string result = this.fВремяНачала;
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяНачала Get end)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяНачала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяНачала Set start)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяНачала Set start)
                this.fВремяНачала = value;
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяНачала Set end)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяНачала Set end)
            }
        }
        
        /// <summary>
        /// ВремяОкончания.
        /// </summary>
        // *** Start programmer edit section *** (ГрафикРаботы.ВремяОкончания CustomAttributes)

        // *** End programmer edit section *** (ГрафикРаботы.ВремяОкончания CustomAttributes)
        [StrLen(255)]
        public virtual string ВремяОкончания
        {
            get
            {
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяОкончания Get start)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяОкончания Get start)
                string result = this.fВремяОкончания;
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяОкончания Get end)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяОкончания Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяОкончания Set start)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяОкончания Set start)
                this.fВремяОкончания = value;
                // *** Start programmer edit section *** (ГрафикРаботы.ВремяОкончания Set end)

                // *** End programmer edit section *** (ГрафикРаботы.ВремяОкончания Set end)
            }
        }
        
        /// <summary>
        /// График работы.
        /// </summary>
        // *** Start programmer edit section *** (ГрафикРаботы.Должность CustomAttributes)

        // *** End programmer edit section *** (ГрафикРаботы.Должность CustomAttributes)
        [PropertyStorage(new string[] {
                "Должность"})]
        [NotNull()]
        public virtual IIS.EshheLegche.Должность Должность
        {
            get
            {
                // *** Start programmer edit section *** (ГрафикРаботы.Должность Get start)

                // *** End programmer edit section *** (ГрафикРаботы.Должность Get start)
                IIS.EshheLegche.Должность result = this.fДолжность;
                // *** Start programmer edit section *** (ГрафикРаботы.Должность Get end)

                // *** End programmer edit section *** (ГрафикРаботы.Должность Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ГрафикРаботы.Должность Set start)

                // *** End programmer edit section *** (ГрафикРаботы.Должность Set start)
                this.fДолжность = value;
                // *** Start programmer edit section *** (ГрафикРаботы.Должность Set end)

                // *** End programmer edit section *** (ГрафикРаботы.Должность Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ГрафикРаботыE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГрафикРаботыE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГрафикРаботыE", typeof(IIS.EshheLegche.ГрафикРаботы));
                }
            }
            
            /// <summary>
            /// "ГрафикРаботыL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ГрафикРаботыL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ГрафикРаботыL", typeof(IIS.EshheLegche.ГрафикРаботы));
                }
            }
        }
    }
}
